<template>
    <div class="image-processor bg-white">
        <div
            v-show="!hasFileToCrop"
            ref="uploader"
            class="image-uploader ba-light-1 corners-3 bg-white widescreen"
        >
            <div class="uploader-content">
                <p
                    v-if="dropZoneError"
                    class="body mb-5 text-error"
                >
                    {{ dropZoneError }}
                </p>

                <a class="choose btn bg-black text-black inverted collapse-250">
                    <i class="fas fa-upload mr-1"></i>
                    Choose a Photo
                </a>

                <a class="drop btn bg-black text-white collapse-250">
                    <i class="fas fa-upload mr-1"></i>
                    Drop to Upload
                </a>

                <p class="tiny font-italic text-grey-3 mt-2">
                    Max file size: <strong>5MB</strong>
                </p>
            </div>
        </div>

        <div
            v-show="hasFileToCrop"
            class="image-cropper bg-white"
        >
            <div class="widescreen overflow">
                <canvas
                    id="imgToCrop"
                    ref="cropper"
                ></canvas>
            </div>

            <div class="cropper-controls pv-1 bg-grey-2 flex flex-row align-center">
                <a
                    class="btn normal bg-dark inverted text-grey-3 short mh-1"
                    @click="resetCrop"
                >
                    Cancel
                </a>

                <div class="flex flex-column"></div>

                <a
                    class="btn bg-x-dark text-white short mh-1"
                    @click="zoomOut"
                >
                    <i class="far fa-search-minus"></i>
                </a>

                <a
                    class="btn bg-x-dark text-white short mh-1"
                    @click="zoomIn"
                >
                    <i class="far fa-search-plus"></i>
                </a>

                <a
                    class="btn bg-x-dark text-white short mh-1"
                    @click="rotate"
                >
                    <i class="fas fa-redo-alt"></i>
                </a>

                <div class="flex flex-column"></div>

                <a
                    class="btn normal text-white short mh-1"
                    :class="themeBgClass"
                    @click="cropImage"
                >
                    Crop
                </a>
            </div>

            <div
                v-show="croppedImage"
                class="image-preview bg-white"
            >
                <div class="widescreen bg-white">
                    <img
                        :src="croppedImage"
                        class="shadow"
                        :class="aspectRatio === 1 ? 'rounded' : ''"
                    >

                    <span
                        v-if="loading"
                        class="loading-element tiny font-italic"
                        :class="themeTextClass"
                    >
                        <i class="fas fa-spinner fa-spin"></i>
                        Loading please wait...
                    </span>
                </div>

                <div class="pa-1 flex flex-row bg-white">
                    <button
                        class="btn collapse-150 mr-1"
                        :disabled="loading"
                        @click="cancelCrop"
                    >
                        <span class="text-black flat short">
                            <i class="fas fa-chevron-left mr-1"></i> Back
                        </span>
                    </button>

                    <div class="flex flex-column"></div>

                    <button
                        class="btn collapse-150"
                        :disabled="loading"
                        @click="uploadImage"
                    >
                        <span
                            class="text-white short"
                            :class="themeBgClass"
                        >
                            Save
                        </span>
                    </button>
                </div>
            </div>
        </div>

        <span class="dz-hidden-input"></span>
    </div>
</template>
<script>
import Cropper from 'cropperjs';
import Dropzone from 'dropzone';
import UserService from '../../assets/js/services/user';
import ThemeClasses from '../../mixins/ThemeClasses';

export default {
    name: 'ImageCropper',
    mixins: [ThemeClasses],
    props: {
        brand: {
            type: String,
            default: () => 'recordeo',
        },

        uploadEndpoint: {
            type: String,
            default: () => null,
        },

        saveEndpoint: {
            type: String,
            default: () => null,
        },

        userId: {
            type: String,
            default: () => null,
        },

        aspectRatio: {
            type: Number,
            default: () => 1,
        },

        isAvatar: {
            type: Boolean,
            default: () => false,
        },

        fieldKey: {
            type: String,
            default: 'profile_picture_image_url',
        },

        dropzoneConfig: {
            type: Object,
            default: () => ({
                url: ' ',
                dictDefaultMessage: '<i class="fas fa-upload"></i> Choose a photo',
                dictFileTooBig: 'Maximum file size exceeded.',
                dictInvalidFileType: 'Invalid File Type.',
                acceptedFiles: '.jpg,.jpeg,.png,.bmp',
                maxFilesize: 5,
                hiddenInputContainer: '.dz-hidden-input',
                autoProcessQueue: false,
            }),
        },
    },
    data() {
        return {
            fileToCrop: null,
            cropperConfig: {
                viewMode: 1,
                aspectRatio: this.aspectRatio,
                dragMode: 'move',
                autoCrop: true,
            },
            cropperInstance: null,
            dropZoneInstance: null,
            dropZoneError: null,
            croppedImage: null,
            imageBlob: null,
            loading: false,
        };
    },
    computed: {
        hasFileToCrop() {
            return this.fileToCrop !== null;
        },

        imageDimensions() {
            if (this.isAvatar) {
                return {
                    width: 500,
                    height: 500,
                };
            }

            return {
                width: 1280,
                height: (1280 / this.aspectRatio),
            };
        },
    },
    watch: {
        fileToCrop() {
            this.cropperInstance.replace(this.fileToCrop);
        },
    },
    created() {
        Dropzone.autoDiscover = false;

        // Polyfill from https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob
        // Should hopefully give support to Edge and IOS Safari
        if (!HTMLCanvasElement.prototype.toBlob) {
            Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
                value(callback, type, quality) {
                    const canvas = this;
                    setTimeout(() => {
                        const binStr = atob(canvas.toDataURL(type, quality).split(',')[1]);

                                
                        const len = binStr.length;

                                
                        const arr = new Uint8Array(len);

                        for (let i = 0; i < len; i++) {
                            arr[i] = binStr.charCodeAt(i);
                        }

                        callback(new Blob([arr], { type: type || 'image/png' }));
                    });
                },
            });
        }
    },
    mounted() {
        this.dropZoneInstance = new Dropzone(
            this.$refs.uploader,
            this.dropzoneConfig,
        );

        this.dropZoneInstance.on('thumbnail', (file) => {
            // If the status errors we don't want to trigger the cropper
            if (file.status !== 'error') {
                this.fileToCrop = file.dataURL;
                this.dropZoneError = null;
            }

            // If the Cropper Instance doesn't exist we need to initialize it.
            if (this.cropperInstance === null) {
                this.cropperInstance = new Cropper(
                    this.$refs.cropper,
                    this.cropperConfig,
                );
            }
        });

        this.dropZoneInstance.on('error', (file, errorMessage) => {
            this.dropZoneError = errorMessage;
        });
    },
    beforeDestroy() {

    },
    methods: {
        resetCrop() {
            this.fileToCrop = null;
            this.dropZoneInstance.removeAllFiles();
        },

        zoomIn() {
            this.cropperInstance.zoom(0.1);
        },

        zoomOut() {
            this.cropperInstance.zoom(-0.1);
        },

        rotate() {
            this.cropperInstance.rotate(90);
        },

        cancelCrop() {
            this.croppedImage = null;
        },

        cropImage() {
            const canvasOutput = this.cropperInstance.getCroppedCanvas(this.imageDimensions);

            canvasOutput.toBlob((blob) => {
                this.imageBlob = blob;
            });

            this.croppedImage = canvasOutput.toDataURL(url => URL.createObjectURL(url));
        },

        uploadImage() {
            const formData = new FormData();
            const newFileName = `${this.userId}_${Date.now()}.png`;

            formData.append('file', this.imageBlob, newFileName);
            formData.append('target', newFileName);
            formData.append('_method', 'PUT');

            this.loading = true;

            UserService.remoteResourceUpload(this.uploadEndpoint, formData)
                .then((resolved) => {
                    if (resolved) {
                        const remoteStorageUrl = resolved.results || resolved.data[0].url;

                        this.$emit('image-uploaded', {
                            image_url: remoteStorageUrl,
                            cropper: this,
                        });

                        // this.setImageAsAvatar(remoteStorageUrl);
                    }
                });
        },

        resetCropper() {
            this.imageBlob = null;
            this.croppedImage = null;
            this.fileToCrop = null;
            this.loading = false;
        },
    },
};
</script>

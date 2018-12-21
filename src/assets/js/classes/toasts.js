/**
 * Toasts
 * Static methods for handling all success/error/dialog notifications.
 */

import Noty from 'noty';

export default {

    /**
     * DEPRECATED
     *
     * Display a basic success message
     *
     * @param {string} text - the text to display in the success box
     * @returns {Object} - Noty object to render the notification
     */
    success(text){
        console.warn('The Toasts.success method has been deprecated as of December 2018, please use the Toasts.push method instead.');

        return new Noty({
            type: 'success',
            theme: 'bootstrap-v4',
            text: text,
            timeout: 4000,
            layout: 'topLeft',
        }).show();
    },

    /**
     * DEPRECATED
     *
     * Display a basic error warning
     *
     * @param {string} text - the text to display in the warning box
     * @returns {Object} - Noty object to render the notification
     */
    errorWarning(text = 'We\'re sorry! An unexpected error occurred. Please refresh the page and try again.'){
        console.warn('The Toasts.errorWarning method has been deprecated as of December 2018, please use the Toasts.push method instead.');

        return new Noty({
            type: 'warning',
            theme: 'bootstrap-v4',
            text: text + '<br><br><span class="tiny font-italic">If the problem persists, please <a href="mailto:support@recordeo.com" target="_blank">contact support.</a></span>',
            timeout: 5000,
            layout: 'topLeft'
        }).show();
    },

    /**
     * Display a notification
     *
     * @param {string} icon - the icon to use ('happy', 'doh', 'astonished', 'mad', 'sad', 'xp')
     * @param {string} title - the colored title to display
     * @param {string} message - the bolded black message
     * @param {string} themeColor - the vuesora theme color for the title
     * @param {number|boolean} timeout - duration in milliseconds before it disappears (false to remove)
     * @returns {Object} - Noty object to render the notification
     */
    push({
        icon,
        title,
        message,
        themeColor = 'drumeo',
        timeout = 5000
    }){
        return new Noty({
            type: 'alert',
            theme: 'musoraNoty',
            text:
                '<div class="flex flex-column icon-column">' +
                '<div class="icon-wrap square ' + icon + '"></div>' +
                '</div>' +
                '<div class="flex flex-column ph-1">' +
                '<h6 class="tiny uppercase text-' + themeColor + '">' + title + '</h6>' +
                '<h5 class="body font-bold font-compressed">' + message + '</h5>' +
                '</div>' +
                '<div class="flex flex-column icon-column flex-center subheading">' +
                '<i class="fas fa-times"></i>' +
                '</div>',
            timeout: timeout,
            layout: 'topLeft',
        }).show();
    },

    /**
     * Display a confirmation dialog
     *
     * @param {string} title - the text to display in the confirmation box
     * @param {string} subtitle - the smaller text to display below the title
     * @param themeColor
     * @param {object} submitButton - object with a text and callback property
     * @param {object} cancelButton - object with a text and callback property
     * @returns {Object} - Noty object to render the dialog
     */
    confirm({
        title,
        subtitle = 'This cannot be undone',
        submitButton = {
            text: '<span class="bg-success text-white">YES</span>',
            callback: null
        },
        cancelButton = {
            text: '<span class="bg-dark inverted text-grey-3">NO</span>',
            callback: null
        }
    }){
        window.confirmationBox = new Noty({
            layout: 'center',
            modal: true,
            theme: 'musoraNoty dialog',
            text: '<span class="title text-center font-bold text-black">' +
                title +
                '</span>' +
                '<br>' +
                '<span class="tiny text-black uppercase">' +
                subtitle +
                '</span>',
            closeWith: [],
            buttons: [
                Noty.button(
                    submitButton.text, 'btn mr-1', () => {
                        if(submitButton.callback != null) {
                            submitButton.callback();
                        }

                        window.confirmationBox.close();
                    }
                ),
                Noty.button(
                    cancelButton.text, 'btn', () => {
                        if(cancelButton.callback != null){
                            cancelButton.callback();
                        }

                        window.confirmationBox.close();
                    }
                )
            ]
        }).show();

        // Instantiate a click handler to close the modal when the user clicks the overlay
        if(window.closeConfirmation == null){
            window.closeConfirmation = true;
            document.body.addEventListener('click', event => {
                if(event.target.classList.contains('noty_modal')){
                    window.confirmationBox.close();
                }
            });
        }

        return window.confirmationBox;
    },
}
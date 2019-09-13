export default {
    data() {
        return {
            eventHandlers: {
                timeupdate: () => {
                    this.currentTime = this.audioPlayer.currentTime;

                    if (this.loop) {
                        const startAnchor = (this.anchorOffsets.a / 100) * this.totalDuration;
                        const endAnchor = (this.anchorOffsets.b / 100) * this.totalDuration;

                        if (this.currentTime > endAnchor || this.currentTime < startAnchor) {
                            this.seek(startAnchor);
                        }
                    }
                },

                durationchange: () => {
                    this.totalDuration = this.audioPlayer.duration;
                },
            },

            keyboardEventHandlers: {
                Space: () => this.playPause(),
                ArrowLeft: () => this.seek(this.currentTime - 10),
                ArrowRight: () => this.seek(this.currentTime + 10),
                Digit1: () => this.seek(this.totalDuration * 0.10),
                Digit2: () => this.seek(this.totalDuration * 0.20),
                Digit3: () => this.seek(this.totalDuration * 0.30),
                Digit4: () => this.seek(this.totalDuration * 0.40),
                Digit5: () => this.seek(this.totalDuration * 0.50),
                Digit6: () => this.seek(this.totalDuration * 0.60),
                Digit7: () => this.seek(this.totalDuration * 0.70),
                Digit8: () => this.seek(this.totalDuration * 0.80),
                Digit9: () => this.seek(this.totalDuration * 0.90),
                Digit0: () => this.seek(0),
                Home: () => this.seek(0),
                End: () => this.seek(this.totalDuration),
                KeyF: () => this.fullscreen(),
                Escape: () => (this.videojsInstance.isFullscreen ? this.fullscreen() : () => {}),
                ArrowUp: () => this.changeVolume({ volume: (this.currentVolume * 100) + 5 }),
                ArrowDown: () => this.changeVolume({ volume: (this.currentVolume * 100) - 5 }),
                KeyM: () => (this.currentVolume === 0
                    ? this.changeVolume({ volume: Number(window.localStorage.getItem('playerVolume') || 75) })
                    : this.changeVolume({ volume: 0 })),
                Minus: () => this.setRate({ rate: this.currentPlaybackRate - 0.25 }),
                Equal: () => this.setRate({ rate: this.currentPlaybackRate + 0.25 }),
            },
        };
    },
};
import axios from 'axios';

export default class VideoTracker {
    constructor({
        media_id,
        player_instance,
        media_type = 'video',
        media_category = 'vimeo',
        media_length_in_seconds = 0,
        current_second = 0,
        media_session_endpoint = '/media-playback-tracking/media-playback-session',
    }) {
        this.media_id = media_id;
        this.player_instance = player_instance;
        this.media_type = media_type;
        this.media_category = media_category;
        this.media_length_in_seconds = media_length_in_seconds;
        this.current_second = current_second;
        this.session_id = null;
        this.total_time_watched = 0;
        this.tracker_interval = null;
        this.media_session_endpoint = media_session_endpoint;
        this.current_tick = 1;

        // Seek the player if the user has already watched the video
        if(this.current_second > 0){
            this.player_instance.mediaElement.setCurrentTime(
                this.current_second
            );
        }

        // Initialize the session with the video tracker
        this.createNewSession()
            .then(response => {
                if (response) {
                    console.log(response);

                    this.session_id = response.data.session_id;
                }
            });
    }

    /**
     * Create the session required to start tracking progress on videos
     *
     * @returns {Promise} - A resolved promise with the response object
     */
    createNewSession() {
        return axios.post(this.media_session_endpoint, {
            media_id: this.media_id,
            media_length_seconds: this.media_length_in_seconds,
            media_type: this.media_type,
            media_category: this.media_category,
            current_second: this.current_second,
        })
            .then(response => response)
            .catch(error => {
                console.error(error);
            });
    }

    /**
     * Handle the time update event and send the relevant requests
     *
     * @returns {Promise} - A resolved promise with the response object
     */
    handlePlayEvent(){

        console.log(this.player_instance.mediaElement.paused);
        console.log(this.session_id);

        if(!this.player_instance.mediaElement.paused && this.session_id){
            this.tracker_interval = setInterval(() => {

                let currentTime = this.player_instance.mediaElement.currentTime;

                this.total_time_watched += 1;
                this.current_tick = this.current_tick < 4 ? this.current_tick + 1 : 1;

                console.log(this.current_tick);

                if(this.current_tick === 4){
                    this.setLastWatchPosition(currentTime, this.total_time_watched)
                        .then(response => response);
                }
            }, 1000);
        }
        else {
            clearInterval(this.tracker_interval);
        }
    }

    /**
     * Save the current position and total time watched
     *
     * @returns {Promise} - A resolved promise with the response object
     */
    setLastWatchPosition(current_time, seconds_played){
        if(this.session_id){
            return axios.post(this.media_session_endpoint + '/' + this.session_id, {
                current_second: current_time,
                seconds_played: seconds_played
            })
                .then(response => response)
                .catch(error => {
                    console.error(error);
                })
        }
    }
}
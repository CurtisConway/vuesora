import axios from 'axios';
import Toasts from '../classes/toasts'
const endpoint_prefix = process.env.ENDPOINT_PREFIX || '';

export default {

    /**
     * Get the forum search results
     *
     * @param {string} term - the search terms
     * @param {string} type - the search type, 'posts' or 'threads' - default null
     * @param {number} page - the results page - default 1
     * @param {number} limit - the results page amount - 10
     * @param {string} sort - the column to sort - default 'score'
     * @returns {Promise} - resolved promise with the response.data object
     */
    getForumSearchResults(term, type, page, limit, sort) {

        let params = {
            term: term,
            page: page || 1,
            limit: limit || 10,
            sort: sort || 'score'
        };

        if (type) {
            params.type = type;
        }

        return axios.get('/members/forums/search', {
            params: params
        })
            .then(response => response.data)
            .catch(this.handleError);
    },

    /**
     * Get the data for a list of forum threads
     *
     * @static
     * @returns {Promise} - resolved promise with the response.data object
     */
    getForumThreads() {
        return axios.get(endpoint_prefix + '/members/forums/threads-json')
            .then(response => response.data)
            .catch(this.handleError);
    },

    /**
     * Get the posts data for a specific forum thread
     *
     * @returns {Promise} resolved promise with the response.data object
     */
    getForumThreadPosts() {
        return axios.get(endpoint_prefix + '/members/forums/post-json')
            .then(response => response.data)
            .catch(this.handleError);
    },

    /**
     * Report a forum post
     *
     * @param {number} id - the post ID to report
     * @returns {Promise} resolved promise with the response.data object
     */
    reportForumPost(id) {
        return axios.put('/forums/post/report/' + id)
            .then(response => response.data)
            .catch(this.handleError);
    },

    /**
     * Like a forum thread
     *
     * @param {number} id - the comment ID to delete
     * @returns {Promise} resolved promise with the response.data object
     */
    likeForumPost(id) {
        return axios.put(endpoint_prefix + '/forums/post/like/' + id)
            .then(response => response.data)
            .catch(this.handleError);
    },

    /**
     * Unlike a forum thread
     *
     * @param {number} id - the comment ID to delete
     * @returns {Promise} resolved promise with the response.data object
     */
    unlikeForumPost(id) {
        return axios.delete(endpoint_prefix + '/forums/post/unlike/' + id)
            .then(response => response.data)
            .catch(this.handleError);
    },

    /**
     * Follow a forum thread
     *
     * @param {number} id - thread id
     * @returns {Promise} resolved promise with the response.data object
     */
    followForumsThread(id) {
        return axios.put(endpoint_prefix + '/forums/thread/follow/' + id)
            .then(response => response.data)
            .catch(this.handleError);
    },

    /**
     * Pin a forum thread
     *
     * @param {number} id - thread id
     * @param {boolean} pinned
     * @returns {Promise} resolved promise with the response.data object
     */
    pinForumsThread(id, pinned) {
        return axios.patch(endpoint_prefix + '/forums/thread/update/' + id, {
            pinned: pinned
        })
            .then(response => response.data)
            .catch(this.handleError);
    },

    /**
     * Lock a forum thread
     *
     * @param {number} id - thread id
     * @param {boolean} locked
     * @returns {Promise} resolved promise with the response.data object
     */
    lockForumsThread(id, locked) {
        return axios.patch(endpoint_prefix + '/forums/thread/update/' + id, {
            locked: locked
        })
            .then(response => response.data)
            .catch(this.handleError);
    },

    /**
     * Delete a Forum thread
     *
     * @param {number} id - thread id
     * @returns {Promise} resolved promise with the response object
     */
    deleteForumsPost(id) {
        return axios.delete(endpoint_prefix + '/forums/post/delete/' + id)
            .then(response => response)
            .catch(this.handleError);
    },

    /**
     * Display an error message and console the error if any request fails
     *
     * @param {object} error - the error object returned by the request
     */
    handleError(error) {
        console.error(error);
        Toasts.push({
            icon: 'doh',
            title: 'This is Embarrassing! That didn\'t work',
            message: 'Refresh the page to try once more, if it happens again please let us know using the chat below.'
        });
    }
}
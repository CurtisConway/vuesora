import VideoPlayer from '../../../../src/components/VideoPlayer/VideoPlayer.vue';
const mountVue = require('cypress-vue-unit-test/src');

describe('Video Player', () => {
    beforeEach(mountVue(VideoPlayer));

    it('renders', () => {
        cy.get('[data-vjs-player]');
    });
});
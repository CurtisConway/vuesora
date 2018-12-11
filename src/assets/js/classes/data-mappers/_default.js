import moment from 'moment';

export default class DataMapper {
    /**
     * Take a content post and map specific post data to specific keys based on content type
     *
     * @param {string} card_type
     * @param {object} post
     * @returns {object} - A mutated object representing the post
     */
    constructor({brand = 'drumeo', post}){
        this.brand = brand;
        this.post = post;

        this.card = {
            color_title: this.getType(),
            black_title: this.post['title'],
            description: this.post['description'],
            grey_title: DataMapper.mapDifficulty(this.post)
        };

        this.list = {
            color_title: this.getPostInstructor(),
            black_title: this.post['title'],
            description: this.post['description'],
            column_data: [
                this.getPostDuration(),
                this.getPostDate()
            ]
        };

        this.schedule = {
            color_title: this.getType(),
            black_title: this.post['title'],
            column_data: [
                this.getPostInstructor(),
                DataMapper.mapDifficulty(this.post)
            ]
        };
    }

    getPostInstructor(){
        if(this.post['instructor']){
            if(Array.isArray(this.post['instructor'])){
                let instructors = [];

                this.post['instructor'].forEach(instructor => {
                    instructors.push(instructor['name']);
                });

                return instructors.join(', ');
            }
            else {
                return this.post['instructor']['name'];
            }
        }

        return 'TBD';
    }

    getPostDuration(){
        return this.post['video'] ?
            Math.round(
                moment.duration((this.post['video']['length_in_seconds'] * 1000), 'ms').asMinutes()
            ) + ' mins' :
            'TBD'
    }

    getPostDate(){
        return moment(this.post['published_on']).format('MMM D/YY');
    }

    getType(){
        return this.post['type'].replace('bundle-', '').replace(/-/g, ' ');
    }

    getEpisodeNumber(){
        return this.post['sort'] ? 'Episode #' + this.post['sort'] : 'TBD';
    }

    getChildLessonCount(){
        return this.post['lesson_count'] ? this.post['lesson_count'] + ' Lessons' : 'TBD';
    }

    static mapDifficulty(post){
        if(post['difficulty'] <= 3){
            return 'beginner ' + post['difficulty']
        }
        else if(post['difficulty'] > 3 && post['difficulty'] <= 6){
            return 'intermediate ' + post['difficulty']
        }
        else if(post['difficulty'] > 6){
            return 'advanced ' + post['difficulty']
        }

        // Some content has difficulty already parsed as a word so we return that,
        // if its falsey, just default it to 'TBD'
        return post['difficulty'] || 'TBD';
    }
}
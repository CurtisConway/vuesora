import { DateTime, Duration } from "luxon";
import Utils from '../classes/utils';

export default class DataMapper {
    constructor({brand = 'drumeo', post}){
        this.brand = brand;
        this.post = post;

        this.card = {
            color_title: this.getType(),
            black_title: this.post['title'],
            description: this.post['description'],
            sheet_music: null,
            grey_title: DataMapper.mapDifficulty(this.post)
        };

        this.list = {
            color_title: this.getPostInstructor(),
            black_title: this.post['title'],
            description: this.post['description'],
            sheet_music: null,
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
                Duration.fromMillis((this.post['video']['length_in_seconds'] * 1000)).as('minutes')
            ) + ' mins' :
            'TBD'
    }

    getPostDate(){
        return DateTime.fromSQL(this.post['published_on']).toFormat('LLL d/yy');
    }

    getType(){
        return this.post['type'].replace('bundle-', '').replace(/-/g, ' ');
    }

    getTypeWithIcon(){
        const icon = Utils.getContentTypeIcon(this.getType());
        const type = this.getType();

        return `<i class="${ icon }" style="margin-right:5px;"></i> <span class="text-white">${ type }</span>`;
    }

    getStyle(){
        if(Array.isArray(this.post['style'])){
            // We only return the first style field
            return this.post['style'][0];
        }

        return this.post['style'];
    }

    getEpisodeNumber(){
        return this.post['sort'] ? 'Episode #' + this.post['sort'] : 'TBD';
    }

    getChildLessonCount(){
        return this.post['lesson_count'] ? this.post['lesson_count'] + ' Lessons' : 'TBD';
    }

    static mapDifficulty(post){
        if(post['difficulty_range']){
            return 'Levels ' + post['difficulty_range'][0] + '-' + post['difficulty_range'][post['difficulty_range'].length - 1];
        }
        else {
            if(post['difficulty'] <= 3){
                return 'beginner ' + post['difficulty']
            }
            else if(post['difficulty'] > 3 && post['difficulty'] <= 6){
                return 'intermediate ' + post['difficulty']
            }
            else if(post['difficulty'] > 6){
                return 'advanced ' + post['difficulty']
            }
        }

        // Some content has difficulty already parsed as a word so we return that,
        // if its falsey, just default it to 'TBD'
        return post['difficulty'] || 'TBD';
    }
}
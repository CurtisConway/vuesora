import DataMapper from './_default';

export default class RecordingDataMapper extends DataMapper {
    constructor({brand = 'drumeo', post}){
        super({
            brand,
            post
        });

        this.card = {
            color_title: this.getPostInstructor(),
            black_title: this.post['title'],
            description: this.post['description'],
            grey_title: DataMapper.mapDifficulty(this.post)
        };

        this.list = {
            color_title: this.getPostInstructor(),
            black_title: this.post['title'],
            description: this.post['description'],
            column_data: [
                DataMapper.mapDifficulty(this.post),
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
}
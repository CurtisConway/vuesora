export default {

    mapObject:{
        0: 'Casual',
        250: 'Enthusiast I',
        1000: 'Enthusiast II',
        2500: 'Pro I',
        5000: 'Pro II',
        10000: 'Pro III',
        20000: 'Master I',
        50000: 'Master II',
        100000: 'Master III',
        250000: 'Drumeo Legend',
        500000: 'Legends: Star',
        1000000: 'Legends: Erskine',
        1500000: 'Legends: Cobham',
        2000000: 'Legends: Garibaldi',
        2500000: 'Legends: Peart',
        3000000: 'Legends: Bonham',
        4000000: 'Legends: Colaiuta',
        5000000: 'Legends: Gadd',
        7500000: 'Legends: Porcaro',
        10000000: 'Legends: Rich'
    },

    /**
     * Get the first key that the value goes over
     *
     * @param {string} xp - the xp amount
     * @param {number} offset - how many indexes after the matched index to return
     * @returns {number} - the number for the specific key
     */
    getNearestKey(xp, offset = 0){
        const mapKeys = Object.keys(this.mapObject);

        for(let i = 0; i < mapKeys.length; i++){

            // Over 10 million or between any of the keys
            if(mapKeys[i] >= 10000000 || (Number(xp) >= Number(mapKeys[i]) && Number(xp) < Number(mapKeys[i + 1]))){
                return mapKeys[i + offset];
            }
        }

        return 0;
    },

    /**
     * Use the getNearestKey method to get the value of the first key the xp goes over
     *
     * @param {string} xp - the xp amount
     * @param {number} offset - how many indexes after the matched index to return
     * @returns {string} - the value for the rank associated to that key/xp
     */
    getNearestValue(xp, offset = 0){
        return(this.mapObject[this.getNearestKey(xp, offset)]);
    }
}
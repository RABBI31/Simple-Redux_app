import { combineReducers } from "redux";

const songReducers = () => {
    return [
        {title : 'Mon mane na', duration :'4.52' , artist : 'Asif Akbar'},
        {title : 'Shei Tumi', duration :'5.02' , artist : 'Ayub Bacchu'},
        {title : 'Ashbar kale ', duration :'5.36' , artist : 'James'}
    ];
};

const selectedSongReducers = (selectedSong=null , action) => {
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    song : songReducers,
    selectedSong : selectedSongReducers
});
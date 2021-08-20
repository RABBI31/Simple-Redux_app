// Action creator 

export const selectSong = (song) =>{
    //return an action
    return{
        tyoe : 'SONG_SELECTED',
        payload : song
    };
};
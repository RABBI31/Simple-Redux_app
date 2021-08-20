import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Mon mane na', duration: '4:05' , artist : 'Asif Akbar' },
    { title: 'Shei Tumi', duration: '2:30' , artist : 'Ayub Bacchu' },
    { title: 'Ashbar kale ashlam aka', duration: '3:15' , artist : 'James' },
    { title: 'Valobashbo bashbo re', duration: '1:45' , artist : 'Habib' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

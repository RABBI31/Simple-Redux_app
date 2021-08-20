import React from 'react';
import {connect} from 'react-redux';

const Songdetails = ({song}) => {
   if(!song){
       return <div>Select a song</div>
   }
    return (
        <div className='' style={{textAlign: 'center'}}>
            <h3 style={{fontSize:'25px'}}>Details for: </h3>
            <p style={{fontSize:'20px'}}>
                Title : {song.title}
                <br />
                Duration : {song.duration}
                <br />
                Artist : {song.artist}
            </p>
            
        </div>
    )
}
const mapStateToProps = (state) =>{
    return { song : state.selectedSong}
}

export default connect(mapStateToProps)(Songdetails);

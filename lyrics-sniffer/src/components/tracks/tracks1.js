import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';


export default function Tracks1(props) {

    const { track } = props;
    return (
            <div className='columns'>
                <div className='column'>
                <div className='card'>
                    <div className='card-content'>
                        <h5>{track.artist_name}</h5>
                        <div class="content">
                            <strong><i className='fas fa-play'></i> Track</strong>: {track.track_name}
                            <br/>
                            <strong><i className='fas fa-compact-disc'></i> Album</strong>: {track.album_name}
                        </div>
                        <Link to={`lyrics/track/${track.track_id}`}>
                            <i className='fas fa-chevron-right'></i> View Lyrics
                        </Link>
                    </div>
                </div>
            </div>
            </div>
    )
}

import React from 'react'

export default function Tracks1(props) {

    const { track } = props;
    return (
            <div className='columns'>
                <div className='column'>
                <div className='card'>
                    <div className='card-content'>
                        <h5>{track.artist_name}</h5>
                    </div>
                </div>
            </div>
            </div>
    )
}

import React from 'react';
import Tracks from '../tracks/tracks';
import Search from '../tracks/search';

export default function index() {
    return (
        <div>
            <React.Fragment>
                <Search />
                <Tracks/>
            </React.Fragment>
        </div>
    )
}

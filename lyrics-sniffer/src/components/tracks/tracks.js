import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layouts/spinner';
import Track1 from '../tracks/tracks1';
class Tracks extends Component {
    render() {
        return (
            <div>
               <Consumer>
                   {value=>{
                       const { track_list,headings } = value;
                       if( track_list === undefined || track_list.length == 0){
                           return <Spinner />
                       }
                       else{
                        return (
                            <React.Fragment>
                                <h2 className='has-text-centered title is-3'>{headings}</h2>
                                <div className='container'>
                                    {track_list.map(item => (
                                        <Track1 key={item.track.track_id} track={item.track}/>
                                    ))}
                                </div>
                            </React.Fragment>
                        )
                       }
                   }}
               </Consumer>
            </div>
        )
    }
}

export default Tracks;

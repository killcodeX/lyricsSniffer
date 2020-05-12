import React, { Component } from 'react';
import { Consumer } from '../../context';

class Tracks extends Component {
    render() {
        return (
            <div>
               <Consumer>
                   {value=>{
                       console.log(value);
                       return <h1>Tracks</h1>
                   }}
               </Consumer>
            </div>
        )
    }
}

export default Tracks;

import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';

export default class Search extends Component {

    state ={
        trackTitle: ''
    };

    findTrack = (dispatch, e) => {
        e.preventDefault();

        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                dispatch({
                    type: 'SEARCH_TRACKS',
                    payload: res.data.message.body.track_list
                });
                console.log(res.data.message.body.track_list)
                this.setState({ trackTitle : '' })
            })
            .catch(err => console.log(err));
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Consumer>
                {value => {

                    const { dispatch } = value;

                    return (
                        <div className='card' id='search'>
                            <div className='card-content'>
                                <h1 className='title is-2 has-text-centered'><i class="fas fa-record-vinyl"></i> Search For Song</h1>
                                <p className='title is-5 has-text-centered'>Get the lyrics of any Songs</p>
                                <form className='has-text-centered' onSubmit={this.findTrack.bind(this, dispatch)}>
                                    <div class="control has-icons-left has-icons-right">
                                        <input class="input" type="text" placeholder="Song title..." name="trackTitle" value={this.state.trackTitle} onChange={this.onChange}/>
                                        <span class="icon is-small is-right">
                                            <i class="fas fa-search"></i>
                                        </span>
                                    </div>
                                    <button class="button is-link" id='sub' type='submit' > Get the lyrics</button>
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}

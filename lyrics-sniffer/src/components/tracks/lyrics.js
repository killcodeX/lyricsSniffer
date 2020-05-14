import React, { Component } from 'react'
import axios from "axios";
import Spinner from "../layouts/spinner";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import '../../App.css';

export default class Lyrics extends Component {

    state = {
        track :{},
        lyrics :{}
    }

    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
            this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                console.log(res.data)
                this.setState({ lyrics: res.data.message.body.lyrics});

                return axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${
                      this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
            })
            .then(res => {
                this.setState({track : res.data.message.body.track});
            })
            .catch(err => console.log(err))
    }

    render() {

        const { track, lyrics } = this.state;
        if (track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0){
            return <Spinner />;
        }
        return (
            <React.Fragment>
                <div className='section' id='lyrics'>
                    <Link to='/' className='button is-black back'>Go Back</Link>
                    <div className='card'>
                        <div className="card-content">
                            <p className="title is-5">{track.track_name} by{' '} <span className='title is-6'>{track.artist_name}</span></p>
                            <div class="content">
                                <p>{lyrics.lyrics_body}</p>
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="list">
                                <p className='list-item'><strong>Album ID</strong>: {track.album_id}</p>
                                <p className='list-item'><strong>Song Genre</strong>: {" "}
                                    {track.primary_genres.music_genre_list.length === 0 ? "NO GENRE AVAILABLE" : track.primary_genres.music_genre_list[0].music_genre.music_genre_name}</p>
                                <p className='list-item'><strong>Explicit Words</strong>: {track.explicit === 0 ? "No" : "Yes"}</p>
                                <p className='list-item'><strong>Release Date</strong>: <Moment format="MM/DD/YYYY">{track.first_release_date}</Moment></p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

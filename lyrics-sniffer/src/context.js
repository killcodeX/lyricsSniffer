import React, { Component } from 'react';


const Context = React.createContext();

export class Provider extends Component {

    state = {
        track_list : [
            { track: { track_name: 'abc'}},
            { track: { track_name: '123'}}
        ],
        headings: 'Top 10 Tracks'
    }

    componentDidMount(){
        fetch('')
        .then(res => console.log(res.json()))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <Context.Provider value= {this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
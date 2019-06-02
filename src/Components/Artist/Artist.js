import React, { Component } from 'react';
import './Artist.css';

class Artist extends Component {
    state = { details : null };
    render() { 
        const details = this.props.details;

        return ( 
            <div className="artist-wrapper" onClick={() => this.onClick()}>
                <img className="artist-pic" src={details.image} alt={details.name}/>
                <div className="artist-name">{details.name}</div>
            </div> 
        );
    }

    onClick(){
        if(this.props.callback){
            this.props.callback();
        }
    }
}
 
export default Artist;
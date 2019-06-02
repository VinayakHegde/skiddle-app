import React, { Component } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarked } from '@fortawesome/free-solid-svg-icons';
import './Event.css';  

class Event extends Component {
    onClick(){
        if(this.props.callback){
            this.props.callback({
                eventid : this.props.details.id,
                view:'eventdetails'
            });
        }
    }
    render() { 
        const details = this.props.details;
        return (
            <div className="card">
                <img className="card-poster" src={details.largeimageurl} alt={details.eventname}/>
                <div className="card-title card-segment">{details.eventname}</div>
                <div className="card-description card-segment"  dangerouslySetInnerHTML={{ __html: details.description }}></div>
                <div className="card-date card-segment">
                    <FontAwesomeIcon icon={faCalendarAlt} className="icon"/>{details.date}
                </div>
                <div className="card-venue card-segment">
                    <FontAwesomeIcon icon={faMapMarked} className="icon"/>{details.venue.name}
                </div>
                <button className="card-details" onClick={() => this.onClick()}>View Details</button>
            </div>
        );
    }
}
 
export default Event;
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarked, faUserAlt, faCashRegister } from '@fortawesome/free-solid-svg-icons';
import { GetEventDetails} from '../../Api/Api';
import './EventDetails.css';
import Artist from '../Artist/Artist';
import LoadIndicator from '../LoadIndicator/LoadIndicator';


class EventDetails extends Component {
    state = {
        details : null,
        loading : true
    }
    render() { 
        const {details, loading} = this.state;

        if(loading){
            return <LoadIndicator></LoadIndicator>
        }
        if(!details) {
            return <div>Event details not found</div>
        }
        return ( 
            <div className="event-details-wrapper">
                <div className="event-details-inner-wrapper">
                    <div className="event-header">
                        <div className="event-name">{details.eventname}</div>
                        <img className="event-poster" src={details.largeimageurl} alt={details.eventname}/>

                        <div className="event-description event-segment" dangerouslySetInnerHTML={{ __html: details.description }} >
                        </div>
                    </div>
                    <div className="event-banner">
                        <div className="event-details">
                            <div className="event-venue event-segment">
                                <FontAwesomeIcon icon={faMapMarked} className="icon"/>
                                <span className="event-venue-name">{details.venue.name} in {details.venue.town}</span>
                            </div>
                            
                            <div className="event-date event-segment">
                                <FontAwesomeIcon icon={faCalendarAlt} className="icon"/>
                                <span className="event-date-name">{details.dateStart} to {details.dateEnd}</span>
                            </div>
                            <div className="event-price event-segment">
                                <FontAwesomeIcon icon={faCashRegister} className="icon"/>
                                Entry Price : {details.entryprice}
                            </div>
                            <div className="event-goers event-segment">
                                <FontAwesomeIcon icon={faUserAlt}  className="icon"/>{details.going.length} Going
                            </div>
                        </div>
                    </div>
                    { details.artists.length > 0 && <h2>who's on the line-up?</h2>}

                    {this.getArtists(details.artists)}
                </div>
            </div> 
        );
    }

    getArtists(artists){
        if( artists && artists.length){
            return (
                <div className="event-artists">
                    {
                        artists.map(artist => {
                            return (
                                <Artist details={artist} callback={() => {this.props.callback({
                                    artistid : artist.artistid,
                                    view:'artistdetails'
                                })}} key={artist.artistid}></Artist>
                            );
                        })
                    }
                </div>
            );
        }

        return  null;
    }
    componentDidMount(){
        this.setState({
            details : null,
            loading:true
        });
        
        GetEventDetails(this.props.eventid)
        .then(response => {
            this.setState({
                details : response.data.results,
                loading:false
            });
        })
        .catch(error => {
            console.log(error);
            
            this.setState({
                details : null,
                loading:false
            });
        });
    }
}
 
export default EventDetails;
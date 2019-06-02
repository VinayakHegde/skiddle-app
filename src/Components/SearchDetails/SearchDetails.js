import React, { Component } from 'react';

import Event from '../Event/Event';
import './SearchDetails.css';

class SearchDetails extends Component {
    render() { 
        const eventsList = this.props.events.map(event => {
            return <Event details={event} key={event.id} callback={this.props.callback}></Event>;
        });
        return ( 
            <div className="events-collection">
                {eventsList}
            </div> 
        );
    }
}
 
export default SearchDetails;
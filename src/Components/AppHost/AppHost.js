import React, { Component } from 'react';

import {GetSearchEvents} from '../../Api/Api';

import AppHeader from '../AppHeader/AppHeader';
import SearchDetails from '../SearchDetails/SearchDetails';
import EventDetails from '../EventDetails/EventDetails';
import ArtistDetails from '../ArtistDetails/ArtistDetails';
import LoadIndicator from '../LoadIndicator/LoadIndicator';

import './AppHost.css';

class AppHost extends Component {
    state = { 
        keyword : '',
        events : [],
        eventid:null,
        artistid: null,
        view : null,
        loading : true 
    }
    
    render() { 
        return ( 
            <div className="app-host">
                <AppHeader view={this.state.view} keyword={this.state.keyword} search={this.searchEvents.bind(this)} set={this.setStateObj.bind(this)} ></AppHeader>
                { this.getView()}
            </div> 
        );
    }

    getView(){
        if(this.state.loading){
            return <LoadIndicator></LoadIndicator>
        }        

        if(this.state.view === 'eventdetails'){
            return <EventDetails eventid={this.state.eventid} callback={this.setStateObj.bind(this)}></EventDetails>
        } else if(this.state.view === 'artistdetails'){
            return <ArtistDetails artistid={this.state.artistid}></ArtistDetails>
        }  
        return <SearchDetails events={this.state.events} callback={this.setStateObj.bind(this)}></SearchDetails>

    }

    componentDidMount(){
        this.searchEvents(this.state.keyword);
    }

    searchEvents(keyword){
        this.setStateObj({
            keyword : keyword,
            events : [],
            view : null,
            loading : true
        });
        GetSearchEvents(keyword)
            .then( response => {
                this.setStateObj({
                    loading : false,
                    events : response.data.results
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    setStateObj(obj){
        this.setState(obj);
    }
}
 
export default AppHost;
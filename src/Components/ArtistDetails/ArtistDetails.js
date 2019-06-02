import React, { Component } from 'react';
import { GetArtistDetails} from '../../Api/Api';
import Artist from '../Artist/Artist';
import './ArtistDetails.css';
import LoadIndicator from '../LoadIndicator/LoadIndicator';

class ArtistDetails extends Component {
    state = { 
        details : null, 
        loading : true 
    }

    render() { 
        const {details, loading} = this.state;
        
        if(loading){
            return <LoadIndicator></LoadIndicator>
        }

        if(!details){
            return (<div>No details found</div>);
        }
        
        const artist = {
            image : details.imageurl,
            name : details.name
        };

        const twitter = details.twitter.length ? details.twitter.indexOf('twitter.com') == 0 ? details.twitter : 'https://twitter.com/'.concat(details.twitter) : null; 
        
        return ( 
            <div className="artist-details-wrapper">
                <div className="artist-profile">
                    <Artist details={artist}></Artist>
                    { details.spotifyartisturl && <a href={details.spotifyartisturl} target="_blank" rel="noopener noreferrer">Spotify</a> }
                    { twitter && <a href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a> }
                    <div className="artist-fav">Favourite : {details.favourite}</div>
                </div>
                <div className="artist-description">{details.description}</div>
            </div>
        );
    }

    componentDidMount(){
        this.setState({
            details:null, 
            loading:true
        });

        GetArtistDetails(this.props.artistid)
        .then(response => {
            this.setState({
                details : response.data.results, 
                loading:false
            });
        })
        .catch((error)=>{
            console.log(error);
            this.setState({
                details : null, 
                loading:false
            });
        })
    }
}
 
export default ArtistDetails;
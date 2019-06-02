import axios from 'axios';

const searchApi = "https://www.skiddle.com/api/v1/events/search/?api_key=008f1e6099ecc48e990e3776784d447b&keyword=KEY_WORD",
    eventApi = "https://www.skiddle.com/api/v1/events/EVENT_ID/?api_key=008f1e6099ecc48e990e3776784d447b",
    artistApi = "https://www.skiddle.com/api/v1/artist/ARTIST_ID?api_key=008f1e6099ecc48e990e3776784d447b";

const GetSearchEvents = (keyword) => {
    return axios.get(searchApi.replace('KEY_WORD', keyword));
};

const GetEventDetails = (eventId) => {
    return axios.get(eventApi.replace('EVENT_ID', eventId));
};

const GetArtistDetails = (artistId) => {
    return axios.get(artistApi.replace('ARTIST_ID', artistId));
};

export {GetSearchEvents, GetEventDetails, GetArtistDetails};
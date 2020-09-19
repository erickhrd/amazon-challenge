import axios from 'axios';

const instance = axios.create ({
    // THE API (cloud function) URL
    baseURL: 'http://localhost:5001/challenge-8399f/us-central1/api' 
    //http://localhost:5001/challenge-8399f/us-central1/api
    //'https://us-central1-challenge-8399f.cloudfunctions.net/api' 
});

export default instance;
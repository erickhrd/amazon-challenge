import axios from 'axios';

const instance = axios.create ({
    // THE API (cloud function) URL
    baseURL: 'http://localhost:5001/challenge-8399f/us-central1/api' //API URL
});

export default instance;
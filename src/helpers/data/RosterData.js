import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getRacers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/racers.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getRacers;

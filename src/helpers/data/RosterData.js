import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getRacers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/racers.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addRacer = (racer) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/racers.json`, racer)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/racers/${response.data.name}.json`, body)
        .then(() => {
          getRacers().then((racersArray) => resolve(racersArray));
        });
    }).catch((error) => reject(error));
});

const deleteRacer = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/racers/${firebaseKey}.json`)
    .then(() => getRacers()
      .then(resolve))
    .catch((error) => reject(error));
});

const updateRacer = (racer) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/racers/${racer.firebaseKey}.json`, racer)
    .then(() => getRacers().then(resolve))
    .catch((error) => reject(error));
});

const getSingleRacer = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/racers/${firebaseKey}.json`)
    .then((racer) => resolve(racer.data))
    .catch((error) => reject(error));
});

export {
  getRacers, addRacer, deleteRacer, updateRacer, getSingleRacer
};

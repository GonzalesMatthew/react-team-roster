import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import NavBar from '../components/NavBar';
import { getRacers } from '../helpers/data/RosterData';
import Routes from '../helpers/Routes';
import firebaseConfig from '../helpers/apiKeys';

function App() {
  const [racers, setRacers] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    getRacers().then((response) => setRacers(response));
  }, []);

  return (
    <>
    <Routes/>
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import {
  useParams
} from 'react-router-dom';
import { getSingleRacer } from '../helpers/data/RosterData';

export default function SingleRacer() {
  const { firebaseKey } = useParams();

  const [racer, setRacer] = useState({});

  useEffect(() => {
    getSingleRacer(firebaseKey)
      .then(setRacer);
  }, []);

  return (
    <div>
      <h1>Driver Info</h1>
      <h2>{racer.fullName}</h2>
      <h3>{racer.team}</h3>
      <img src={racer.imageUrl}/>
    </div>
  );
}

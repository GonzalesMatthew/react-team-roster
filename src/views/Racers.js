import React from 'react';
import PropTypes from 'prop-types';
import RacerCard from '../components/RacerCard';

function Racers({ racers, setRacers }) {
  return (
    <>
      <div className="card-container">
        {racers.map((racerInfo) => (
          <RacerCard
            key={racerInfo.firebaseKey}
            firebaseKey={racerInfo.firebaseKey}
            fullName={racerInfo.fullName}
            team={racerInfo.team}
            imageUrl={racerInfo.imageUrl}
            uid={racerInfo.uid}
            setRacers={setRacers}
          />
        ))}
      </div>
    </>
  );
}

Racers.propTypes = {
  racers: PropTypes.array.isRequired,
  setRacers: PropTypes.func.isRequired
};

export default Racers;

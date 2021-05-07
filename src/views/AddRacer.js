import React from 'react';
import PropTypes from 'prop-types';
import RacerForm from '../components/RacerForm';

function AddRacer({ setRacers, user }) {
  return (
    <div>
      <RacerForm
        formTitle="Form Name"
        setRacers={setRacers}
        user={user}
      />
    </div>
  );
}

AddRacer.propTypes = {
  setRacers: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default AddRacer;

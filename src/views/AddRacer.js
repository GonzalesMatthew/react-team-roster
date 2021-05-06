import React from 'react';
import PropTypes from 'prop-types';
import RacerForm from '../components/RacerForm';

function AddRacer({ setRacers }) {
  return (
    <div>
      <RacerForm
        formTitle="Form Name"
        setRacers={setRacers}
      />
    </div>
  );
}

AddRacer.propTypes = {
  setRacers: PropTypes.func.isRequired
};

export default AddRacer;

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addRacer, updateRacer } from '../helpers/data/RosterData';

const RacerForm = (
  {
    formTitle,
    setRacers,
    imageUrl,
    fullName,
    team,
    firebaseKey
    // uid
  }
) => {
  const history = useHistory();

  const [racer, setRacer] = useState({
    imageUrl: imageUrl || '',
    fullName: fullName || '',
    team: team || 0,
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setRacer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (racer.firebaseKey) {
      updateRacer(racer).then((racerArray) => setRacers(racerArray));
    } else {
      addRacer(racer).then((response) => {
        setRacers(response);
        history.push('/racers');
      });
    }
  };

  return (
    <>
      <div className='racer-form'>
        <form
        id='addRacerForm'
        autoComplete='off'
        onSubmit={handleSubmit}
        >
          <h2>{formTitle}</h2>
          <label>Full Name:</label>
          <input
          name='fullName'
          type='text'
          placeholder='Name'
          value={racer.fullName}
          onChange={handleInputChange}>
          </input>
          <label>Image URL:</label>
          <input
          name='imageUrl'
          type='url'
          placeholder='Image URL'
          value={racer.imageUrl}
          onChange={handleInputChange}>
          </input>
          <label>Team:</label>
          <input
          name='team'
          type='text'
          placeholder='Team'
          value={racer.team}
          onChange={handleInputChange}>
          </input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

RacerForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setRacers: PropTypes.func,
  imageUrl: PropTypes.string,
  fullName: PropTypes.string,
  team: PropTypes.string,
  firebaseKey: PropTypes.string
};

export default RacerForm;

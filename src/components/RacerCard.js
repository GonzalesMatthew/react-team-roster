import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import { deleteRacer } from '../helpers/data/RosterData';
import RacerForm from './RacerForm';

const RacerCard = ({
  firebaseKey,
  imageUrl,
  fullName,
  team,
  setRacers,
  user
}) => {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteRacer(firebaseKey)
          .then((racerArray) => setRacers(racerArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'view':
        history.push(`/drivers/${firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Card body>
          <CardTitle tag="h5">{fullName}</CardTitle>
          <CardText>Team: {team}</CardText>
          <img width="200" src={imageUrl} alt="Driver's photograph"/>
          <Button color="warning" onClick={() => handleClick('view')}>View Driver</Button>
          <Button color="danger" onClick={() => handleClick('delete')}>Delete Driver</Button>
          <Button color="info" onClick={() => handleClick('edit')}>
            {editing ? 'Close Form' : 'Edit Driver'}
          </Button>
          {
            editing && <RacerForm
              formTitle='Edit Racer'
              setRacers={setRacers}
              firebaseKey={firebaseKey}
              fullName={fullName}
              team={team}
              imageUrl={imageUrl}
              user={user}
            />
          }
    </Card>
  );
};

RacerCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  setRacers: PropTypes.func,
  user: PropTypes.any
};
export default RacerCard;

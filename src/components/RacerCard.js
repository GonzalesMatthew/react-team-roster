import React, { useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteRacer } from '../helpers/data/RosterData';

const RacerCard = ({
  firebaseKey,
  imageUrl,
  fullName,
  team,
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
        history.push(`/racers/${firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Card body>
          <CardTitle tag="h5">{fullName}</CardTitle>
          <CardText>Team: {team}</CardText>
          <CardText>{imageUrl}</CardText>
          <Button color="warning" onClick={() => handleClick('view')}>View Racer</Button>
          <Button color="danger" onClick={() => handleClick('delete')}>Delete Racer</Button>
          <Button color="info" onClick={() => handleClick('edit')}>
            {editing ? 'Close Form' : 'Edit Racer'}
          </Button>
          {
            editing && <RacerForm
              formTitle='Edit Racer'
              setStudents={setRacers}
              firebaseKey={firebaseKey}
              fullName={fullName}
              team={team}
              imageUrl={imageUrl}
            />
          }
    </Card>
  );
};

RacerCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired
};
export default RacerCard;

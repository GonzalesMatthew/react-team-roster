import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path='/racers/'
          component{}
        />
        <Route
          path='/add-racer'
          component{}
        />
      </Switch>
    </div>
  );
}

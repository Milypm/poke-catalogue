import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import PokemonDetail from '../components/PokemonDetail';
import '../styles/index.css';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/pokemon-detail" component={PokemonDetail} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

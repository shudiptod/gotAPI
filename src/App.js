import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container } from 'semantic-ui-react';
import Navbar from './Components/Navbar';
import { Characters } from './Components/Data/Characters';
import { Houses } from './Components/Data/Houses';

import { Home } from './Components/Home';
import Events from './Components/Data/Events';
import Battles from './Components/Data/Battles';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/characters'>
              <Characters />
            </Route>
            <Route exact path='/houses'>
              <Houses />
            </Route>
            <Route exact path='/events'>
              <Events />
            </Route>
            <Route exact path='/battles'>
              <Battles />
            </Route>
          </Switch>
        </Container>
      </Router>


    </>
  );
}

export default App;

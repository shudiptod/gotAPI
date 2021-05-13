import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from './Components/Navbar';
import { Characters } from './Components/Data/Characters';
import { Houses } from './Components/Data/Houses';
import { Home } from './Components/Home';
import Events from './Components/Data/Events';
import Battles from './Components/Data/Battles';

import {Container} from 'react-bootstrap';

function App() {
  return (
    <>
      <Router>
        <NavBar />
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

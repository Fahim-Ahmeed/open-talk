import React from 'react';
import logo from './logo.svg';
import './App.css';
import NotFound from './Components/NotFound/NotFound'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import PostDetails from './Components/PostDetails/PostDetails';



function App() {
  return (
    <Router>
      <Switch>
      <Route path="/home">
      <Home></Home>
      </Route>
      <Route path="/post/:id">
        <PostDetails></PostDetails>
      </Route>
      <Route exact path="/">
      <Home></Home>
      </Route>
      <Route path="*">
      <NotFound></NotFound>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;

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
import Comments from './Components/Comments/Comments';


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/home">
      <Home></Home>
      </Route>
      <Route path="/post/:id">
        <Link>
        <Comments></Comments>
        </Link>
     
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

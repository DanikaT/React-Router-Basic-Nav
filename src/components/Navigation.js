import React from 'react';
import { Route, Switch, Link} from "react-router-dom";
import Contact from './Contact';
import Home from './Home';
import About from './About';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to="/">
            Home
            </Link>
        </div>
        <div>
          <Link to="/about">
            About
            </Link>
        </div>
        <div>
          <Link to="/contact">
            Contact
            </Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </div>
  );
};

export default Navigation;

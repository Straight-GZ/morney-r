import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {Tag} from "./views/Tag";
import {Money} from './views/Money';
import {Statistics} from './views/Statistics';
import {Tags} from './views/Tags';
import {NoMatch} from './views/NoMatch';


function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from = "/" to = "/money"/>
        <Route exact path = "/tags">
          <Tags/>
        </Route><Route exact path = "/tags/:id">
        <Tag/>
      </Route>
        <Route exact path = "/money">
          <Money/>
        </Route>
        <Route exact path = "/statistics">
          <Statistics/>
        </Route>
        <Route exact path = "*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}


export {App};

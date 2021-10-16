import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Search from '../Search/Search';
import Comparison from '../Comparison/Comparison';

function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/comparison" exact component={Comparison} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
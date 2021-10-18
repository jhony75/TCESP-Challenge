import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import ComparisonPage from '../../pages/ComparisonPage/ComparisonPage'

function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/comparison" exact component={ComparisonPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
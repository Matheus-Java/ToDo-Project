import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../views/Home';
import Taks from '../views/Task';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/task" exact component={Taks}/>
        <Route path="/task/:id" exact component={Taks}/>
      </Switch>
    </BrowserRouter>
  )
}
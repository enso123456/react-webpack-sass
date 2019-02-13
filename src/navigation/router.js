import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Home from '../pages/home';
import Animals from './animals';
import Vegies from './vegies';

const AppNavigation = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/animals" component={Animals} />
      <Route path="/vegies" component={Vegies} />
    </div>
  </BrowserRouter>
);

export default AppNavigation;
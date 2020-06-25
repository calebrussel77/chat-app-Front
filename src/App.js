import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import './assets/styles/app.css';
import Layout from "./hoc/layout/Layout";
import Chat from './containers/Chat/Chat';
import Join from './containers/Join/Join';

const App = () =>{

  let routes = (
      <Switch>
        <Route exact path="/" component={Join} />
        <Route exact path="/chat" component={Chat} />
        <Redirect to="/" />
      </Switch>
  );

  return (
      <Layout>
          {routes}
      </Layout>
  );
};

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import AssetDetails from './components/AssetDetails';
import AssetData from './components/AssetData';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Landing} />
      <Route path='/login' component={Login} />
      <Route path='/asset-details/:id' component={AssetDetails} />
      <Route path='/asset-data/:id' component={AssetData} />
      <Route path='**' component={Landing} />
    </Switch>
  );
}

export default App;

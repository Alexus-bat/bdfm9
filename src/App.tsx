import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Form from './pages/Form';
import Main from './pages/Main';

import './styles/App.scss';

const App: React.FC = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route component={Main} path='/' exact />
          <Route component={Form} path='/form' />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;

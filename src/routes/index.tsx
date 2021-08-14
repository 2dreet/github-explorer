import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

// exact diz para o Route que é exatamente a / se não sempre ira cair na rota do dashboard
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    {/* o valor + na rota indica que tudo depois de repository/ é o valor da rota */}
    <Route path="/repository/:repository+" component={Repository} />
  </Switch>
);

export default Routes;

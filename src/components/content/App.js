import React from 'react';
import AuthLayout from '../../layouts/auth';
import { Switch, Route } from 'react-router-dom';
import notFound from '../../pages/notFound';
import { routes } from './routes';

function App() {
  const generatedLocaleRoutes = routes.map((route, index) => (<Route
    exact={route.exact}
    path={`/:locale(en|de)?/${route.path}`}
    component={route.component}
    key={index}/>))

  return (
    <div className="App">
      <AuthLayout>
        <Switch>
          {generatedLocaleRoutes}
          <Route path="*" component={notFound} />  
        </Switch>
      </AuthLayout>
    </div>
  );
}

export default App;

import React from 'react';
import { useRoutes } from 'react-router';
import appRoutes from './router';

const App: React.FC = () => {
  const routes = useRoutes(appRoutes(!!window.ethereum));

  return routes;
};

export default App;

import Home from '@pages/Home';
import NotWeb3 from '@pages/NotWeb3';
import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const appRoutes = (isWeb3: boolean): RouteObject[] => [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/not-web3',
    element: isWeb3 ? <Navigate to="/" /> : <NotWeb3 />,
  },
];

export default appRoutes;

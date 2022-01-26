import React from 'react';
import NavBar from './NavBar';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="h-full w-full">
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

import React from 'react';
import Button from '../Button';

const NAV_LIST = [
  { label: 'About', nav: '/about' },
  { label: 'Explore', nav: '/explore' },
  { label: 'Help', nav: '/help' },
];

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 lef-0 right-0 bg-transparent w-full flex justify-between px-20 h-16 items-center">
      <h3 className="flex-1 justify-start font-bold text-xl">NYKH</h3>
      <ul className="flex flex-1 justify-center">
        {NAV_LIST.map((item) => (
          <li
            key={item.nav}
            className="px-3 font-semibold text-gray-700 hover:text-gray-400 transition-all duration-300"
          >
            <a href={item.nav}>{item.label}</a>
          </li>
        ))}
      </ul>
      <div className="flex flex-1 justify-end">
        <Button label="Wallet" />
      </div>
    </nav>
  );
};

export default NavBar;

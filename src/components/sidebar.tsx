import React from 'react';
import { useLocation, Link, BrowserRouter as Router } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { text: 'Classroom', icon: 'fas fa-book', path: '/' },
    { text: 'Community', icon: 'fas fa-users', path: '/community' },
    { text: 'Reward', icon: 'fas fa-gift', path: '/reward' },
    { text: 'Profile', icon: 'fas fa-user', path: '/profile' },
  ];

  return (
    <div className="sidebar">
      <h1 className="text-2xl font-bold text-purple-500 mb-8">Web3mentor</h1>
      {menuItems.map((item) => (
        <Link
          key={item.text}
          to={item.path}
          className={`block py-2 px-4 mb-2 rounded ${location.pathname === item.path ? 'bg-purple-500' : 'hover:bg-gray-700'}`}
        >
          <i className={`${item.icon} mr-2`}></i> {item.text}
        </Link>
      ))}
    </div>
  );
};

const SidebarWithRouter = () => (
  <Router>
    <Sidebar />
  </Router>
);

export default SidebarWithRouter;

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

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
          href={item.path}
          className={`block py-2 px-4 mb-2 rounded ${pathname === item.path ? 'bg-purple-500' : 'hover:bg-gray-700'}`}
        >
          <i className={`${item.icon} mr-2`}></i>
          {item.text}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;

import React from 'react';
import Navbar from '../components/Navbar';
import Player from '../components/Player';

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-1 overflow-auto p-4 bg-gray-900 text-white">{children}</main>
      <Player />
    </div>
  );
}
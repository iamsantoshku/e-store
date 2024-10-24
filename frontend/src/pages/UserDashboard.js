import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='container mx-auto p-6'>
        <h1 className='text-2xl font-bold mb-6'>User Dashboard</h1>
        <div className='flex gap-6'>
          <nav className='w-1/4 bg-white shadow rounded-lg p-4'>
            <ul className='space-y-4'>
              <li>
                <Link to="/user-dashboard" className='text-blue-500 hover:underline'>
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/user-dashboard/profile" className='text-blue-500 hover:underline'>
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/user-dashboard/orders" className='text-blue-500 hover:underline'>
                  Orders
                </Link>
              </li>
              <li>
                <Link to="/user-dashboard/payments" className='text-blue-500 hover:underline'>
                  Payments
                </Link>
              </li>
              <li>
                <Link to="/user-dashboard/settings" className='text-blue-500 hover:underline'>
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
          
          <main className='w-3/4 bg-white shadow rounded-lg p-4'>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

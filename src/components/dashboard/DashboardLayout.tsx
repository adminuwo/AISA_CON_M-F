'use client';

import React from 'react';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'ADMIN' | 'CLIENT';
  userName?: string;
}

const DashboardLayout = ({ children, role, userName }: DashboardLayoutProps) => {
  return (
    <div className="flex bg-[#f9fafb] min-h-screen">
      <Sidebar role={role} />
      
      <main className="flex-1 ml-64 min-h-screen">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-lg font-semibold text-gray-800">
            {role === 'ADMIN' ? 'Admin Portal' : 'Client Dashboard'}
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">{userName || 'User Name'}</p>
              <p className="text-xs text-gray-500 capitalize">{role.toLowerCase()}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white shadow-sm flex items-center justify-center font-bold text-gray-600">
              {userName?.[0] || 'U'}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;

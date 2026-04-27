'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  Zap, 
  Settings, 
  LogOut,
  Shield,
  Activity
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = ({ role }: { role: 'ADMIN' | 'CLIENT' }) => {
  const pathname = usePathname();

  const adminLinks = [
    { label: 'Overview', icon: LayoutDashboard, href: '/admin' },
    { label: 'Clients', icon: Users, href: '/admin/clients' },
    { label: 'Activity Logs', icon: Activity, href: '/admin/logs' },
    { label: 'Settings', icon: Settings, href: '/admin/settings' },
  ];

  const clientLinks = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { label: 'Inbox', icon: MessageSquare, href: '/dashboard/inbox' },
    { label: 'Automations', icon: Zap, href: '/dashboard/automations' },
    { label: 'Settings', icon: Settings, href: '/dashboard/settings' },
  ];

  const links = role === 'ADMIN' ? adminLinks : clientLinks;

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0">
      <div className="p-6 border-b border-gray-100 flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Shield className="text-white w-5 h-5" />
        </div>
        <span className="font-bold text-xl text-gray-800">Aisaconnect</span>
      </div>

      <nav className="flex-1 p-4 flex flex-col gap-1">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "sidebar-link",
                isActive && "sidebar-link-active"
              )}
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100 mt-auto">
        <button className="sidebar-link w-full text-red-600 hover:bg-red-50">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

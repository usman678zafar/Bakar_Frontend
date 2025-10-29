import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingBag,
  Utensils,
  Salad,
  Tags,
  CalendarRange,
} from 'lucide-react';
import clsx from 'clsx';

const NAV_ITEMS = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    path: '/admin',
  },
  {
    label: 'Orders',
    icon: ShoppingBag,
    path: '/admin/orders',
  },
  {
    label: 'Menu Items',
    icon: Utensils,
    path: '/admin/menu',
  },
  {
    label: 'Sidelines',
    icon: Salad,
    path: '/admin/sidelines',
  },
  {
    label: 'Meal Plans',
    icon: CalendarRange,
    path: '/admin/meal-plans',
  },
  {
    label: 'Categories',
    icon: Tags,
    path: '/admin/categories',
  },
];

const AdminSidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="hidden sm:block group fixed left-0 top-20 z-30 h-[calc(100vh-5rem)]">
      <div className="h-full w-16 group-hover:w-64 transition-all duration-300 ease-in-out bg-white border-r border-gray-200 shadow-lg rounded-tr-2xl rounded-br-2xl overflow-hidden">
        <div className="flex flex-col h-full py-6">
          <div className="px-4 pb-6 border-b border-gray-100 hidden group-hover:block">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
              Admin
            </p>
            <p className="mt-1 text-sm font-semibold text-gray-700">
              Control Center
            </p>
          </div>

          <nav className="flex-1 space-y-1 mt-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  title={item.label}
                  className={clsx(
                    'flex items-center mx-2 px-4 py-3 rounded-xl transition-all duration-200',
                    isActive
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-600 hover:bg-primary/10 hover:text-primary'
                  )}
                >
                  <Icon size={20} />
                  <span className="ml-3 text-sm font-semibold hidden group-hover:block">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="px-4 pt-4 mt-auto hidden group-hover:block">
            <p className="text-xs text-gray-400 uppercase font-semibold mb-2">
              Tips
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Hover over the sidebar to reveal full navigation labels. Use the
              categories section to organise menu items quickly.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;

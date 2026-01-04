import React from 'react';
import { Home, Store, Bell, Menu, Clapperboard } from 'lucide-react';
import { NavLink } from './NavLink'; 

interface NavItem {
  path: string;
  icon: React.ElementType;
  label: string;
}

const navItems: NavItem[] = [
  { path: "/", icon: Home, label: "Feed" },
  { path: "/watch", icon: Clapperboard, label: "Watch" },
  { path: "/marketplace", icon: Store, label: "Marketplace" },
  { path: "/notifications", icon: Bell, label: "Notifications" },
  { path: "/menu", icon: Menu, label: "Menu" },
];

export const BottomNav: React.FC = () => {
  return (
    // Fixed container, hidden on screens larger than mobile (md:hidden)
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-14 items-center justify-around border-t border-gray-300 bg-white shadow-xl md:hidden">
      {navItems.map((item) => (
        <NavLink 
          key={item.path}
          to={item.path}
          // Base class applied to the link wrapper, using 'group' for hover effects
          className="flex h-full w-full items-center justify-center transition-all duration-200 relative group"
        >
          {({ isActive }: { isActive: boolean }) => (
            <>
              {/* Blue indicator stripe at the top */}
              <div 
                className={`absolute top-0 h-1 w-full transition-opacity duration-200 
                  ${isActive ? 'bg-blue-600 opacity-100' : 'bg-transparent opacity-0'}
                `}
              ></div>

              {/* Icon */}
              <item.icon 
                size={24} 
                // Active icon is bold (strokeWidth=3) and blue
                strokeWidth={isActive ? 3 : 2} 
                className={`transition-colors duration-200 ${
                  isActive 
                    ? 'text-blue-600' 
                    : 'text-gray-500 group-hover:text-gray-700'
                }`}
              />
              <span className="sr-only">{item.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};
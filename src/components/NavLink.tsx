import { NavLink as RouterNavLink } from 'react-router-dom';
import { type LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavLinkProps {
  to: string;
  icon: LucideIcon;
  label: string; // Required for accessibility (sr-only)
  exact?: boolean;
  notificationCount?: number;
}

export function NavLink({ to, icon: Icon, label, exact = false, notificationCount = 0 }: NavLinkProps) {
  return (
    <RouterNavLink
      to={to}
      // 'end' prop ensures exact matching is respected for the home route /
      end={exact}
      // The className function handles the container styling
      className={({ isActive }) =>
        cn(
          'relative flex flex-col items-center justify-center h-full w-full p-2 transition-colors duration-200',
          // Default text/icon color
          'text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
        )
      }
    >
      {({ isActive }) => (
        <>
          {/* Icon Container/Wrapper */}
          <div className="relative">
            <Icon
              className={cn('h-6 w-6 md:h-7 md:w-7', {
                'text-blue-600 dark:text-blue-500': isActive, // Active color override
              })}
              aria-hidden="true"
            />
            
            {/* Notification Bubble */}
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-2 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-red-600 p-0.5 text-xs font-medium text-white ring-2 ring-white dark:ring-gray-900">
                {notificationCount > 99 ? '99+' : notificationCount}
              </span>
            )}
          </div>

          {/* Accessible Label */}
          <span className="sr-only">
            {label}
          </span>

          {/* Active Indicator Bar (Blue bar underneath the icon, common in Facebook mobile UI) */}
          <span
            aria-hidden="true"
            className={cn(
              'absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 transition-transform origin-bottom duration-300',
              isActive ? 'scale-x-100' : 'scale-x-0'
            )}
          />
        </>
      )}
    </RouterNavLink>
  );
}
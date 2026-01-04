import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a date string into a compact 'time ago' format (e.g., 5m, 2h, 3d).
 * @param dateString ISO date string or Date object convertible string.
 * @returns Time ago string.
 */
export function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) {
    return seconds <= 10 ? "Just now" : `${seconds}s`;
  }

  let interval = Math.floor(seconds / 31536000); // Years
  if (interval >= 1) {
    return interval + "y";
  }
  interval = Math.floor(seconds / 2592000); // Months
  if (interval >= 1) {
    return interval + "mo";
  }
  interval = Math.floor(seconds / 604800); // Weeks
  if (interval >= 1) {
    return interval + "w";
  }
  interval = Math.floor(seconds / 86400); // Days
  if (interval >= 1) {
    return interval + "d";
  }
  interval = Math.floor(seconds / 3600); // Hours
  if (interval >= 1) {
    return interval + "h";
  }
  interval = Math.floor(seconds / 60); // Minutes
  if (interval >= 1) {
    return interval + "m";
  }

  return "Less than a minute ago";
}

// Define the structure for toasts used by use-toast.ts
export type Toast = {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
};
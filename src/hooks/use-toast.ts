import { createContext, useContext } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default';

interface ToastContextType {
  /**
   * Displays a general toast notification.
   * @param message The content of the toast.
   * @param type The type of the toast ('success', 'error', etc.). Defaults to 'default'.
   */
  toast: (message: string, type?: ToastType) => void;

  /**
   * Displays a success toast notification.
   * @param message The content of the toast.
   */
  success: (message: string) => void;

  /**
   * Displays an error toast notification.
   * @param message The content of the toast.
   */
  error: (message: string) => void;

  /**
   * Displays an info toast notification.
   * @param message The content of the toast.
   */
  info: (message: string) => void;
}

// Initialize the context with undefined. The actual provider implementation 
// (ToastProvider) must be created and placed in the component tree above the consumers.
const ToastContext = createContext<ToastContextType | undefined>(undefined);

/**
 * Hook to access toast notification functions (toast, success, error, info).
 * Requires ToastProvider to be set up in the root of the application.
 * @returns ToastContextType
 */
export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    // If the hook is used outside of the provider, throw an informative error.
    throw new Error('useToast must be used within a ToastProvider.');
  }

  return context;
};

// NOTE: The implementation of ToastProvider and the state management 
// for the toasts is expected to be handled elsewhere (e.g., in App.tsx or a dedicated component).
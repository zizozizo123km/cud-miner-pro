# Facebook Mobile Dashboard Clone

## Overview
This project is a modern, responsive recreation of a simplified Facebook/Social Media application dashboard, optimized primarily for mobile viewing. It leverages a robust technology stack including React, TypeScript, Vite, and Tailwind CSS to deliver a fast and scalable user interface.

The goal is to demonstrate professional full-stack architectural practices by implementing custom hooks, comprehensive routing, and highly reusable components designed for a mobile-first environment.

## Features
*   **Mobile-First Design:** Optimized specifically for portrait viewing on standard mobile devices.
*   **Intuitive Navigation:** A sticky bottom navigation bar (`BottomNav.tsx`) mimicking standard mobile social media applications.
*   **Reusable UI Components:** Dedicated components for displaying key application data like statistics (`StatCard.tsx`) and dynamic user content (`ReviewCard.tsx`).
*   **Custom Hooks:** Implementation of `use-mobile.tsx` for adaptive rendering based on screen size, and `use-toast.ts` for managing user feedback notifications.
*   **TypeScript Enforced:** Strong typing across all components and utility functions for improved maintainability.
*   **Efficient Styling:** Utility-first styling handled exclusively by Tailwind CSS and PostCSS.

## Technology Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | React v18 | Core library for building the user interface. |
| **Language** | TypeScript | Ensures type safety and enhances developer experience. |
| **Build Tool** | Vite | Modern, fast development and build tool. |
| **Styling** | Tailwind CSS | Utility-first CSS framework for rapid styling. |
| **Routing** | React Router DOM | Declarative routing for seamless SPA navigation. |
| **Icons** | Lucide-React | Modern, consistent icon library. |
| **Utilities** | `clsx` / `cva` | Used via `src/lib/utils.ts` for conditional class joining. |

## Prerequisites

Ensure you have the following installed on your local machine:
*   Node.js (LTS version)
*   npm or yarn

## Installation and Setup

1.  **Clone the repository:**
        git clone [repository-url]
    cd facebook-mobile-dashboard-clone
    
2.  **Install dependencies:**
        npm install
    # or
    yarn install
    
3.  **Run the development server:**
        npm run dev
    # or
    yarn dev
    
The application will be accessible at the address displayed in your console (e.g., `http://localhost:5173`).

## Project Structure

The project adheres to a clean, component-based structure:

.
├── public/
├── src/
│   ├── components/       # Reusable UI elements (Dashboard, Nav, Cards)
│   ├── hooks/            # Custom React hooks (use-mobile, use-toast)
│   ├── lib/              # Utility functions (utils.ts)
│   ├── pages/            # Router views (Index, NotFound)
│   ├── App.tsx           # Main application shell and router setup
│   ├── index.css         # Global Tailwind directives
│   └── main.tsx          # Entry point (ReactDOM render)
├── index.html            # Entry HTML file
├── package.json          # Project dependencies and scripts
├── tailwind.config.ts    # Tailwind customization
├── vite.config.ts        # Vite build configuration
└── ...                   # TypeScript and PostCSS configs

## Recommended Usage

To view the application as intended, load the URL in a desktop browser, open Developer Tools (F12), and switch to a standard mobile viewport (e.g., iPhone or Android) to observe the dedicated mobile layout and bottom navigation.
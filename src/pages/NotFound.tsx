import React from 'react';
import { Link } from 'react-router-dom';
import { Frown, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center bg-white p-10 rounded-xl shadow-2xl w-full max-w-md border border-gray-200"
      >
        <Frown className="w-16 h-16 text-blue-600 mx-auto mb-6" />
        
        <h1 className="text-7xl font-extrabold text-gray-900 mb-2 leading-none">404</h1>
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Page Not Found</h2>
        
        <p className="text-md text-gray-500 mb-8">
          The link you followed may be broken, or the page may have been removed.
        </p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to News Feed
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
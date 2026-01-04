import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Dashboard from './components/Dashboard';
import BottomNav from './components/BottomNav';
import { useMobile } from './hooks/use-mobile';

function App() {
  const isMobile = useMobile();

  return (
    <BrowserRouter>
      {/* 
        The main application container uses a clean background, typical for modern apps.
        Using min-h-screen ensures full coverage.
      */}
      <div className="min-h-screen bg-gray-100 font-sans text-gray-800 antialiased">
        <Routes>
          {/* The main route uses Dashboard as the structural wrapper (e.g., housing the top navbar and sidebar/layout structure) */}
          <Route path="/" element={<Dashboard />}>
            {/* The actual content for the homepage */}
            <Route index element={<Index />} />

            {/* Placeholder for future specific user or profile routes if needed */}
            {/* <Route path="profile/:id" element={<ProfilePage />} /> */}
          </Route>

          {/* Fallback route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* 
          Conditional rendering of the mobile bottom navigation bar 
          This bar is outside the standard layout defined in Dashboard, ensuring it sticks globally.
        */}
        {isMobile && <BottomNav />}
      </div>
    </BrowserRouter>
  );
}

export default App;
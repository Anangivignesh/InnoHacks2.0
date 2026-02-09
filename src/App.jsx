import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Public Pages
import Home from './pages/public/Home';
import About from './pages/public/About';
import Schedule from './pages/public/Schedule';
import Tracks from './pages/public/Tracks';
import Sponsors from './pages/public/Sponsors';
import Register from './pages/public/Register';
import Contact from './pages/public/Contact';

// Portal Pages
import Login from './pages/portal/Login';
import Signup from './pages/portal/Signup';
import Dashboard from './pages/portal/Dashboard';
import TeamManagement from './pages/portal/TeamManagement';
import ProblemStatements from './pages/portal/ProblemStatements';
import Submission from './pages/portal/Submission';
import Leaderboard from './pages/portal/Leaderboard';
import MentorBooking from './pages/portal/MentorBooking';
import ProfileSettings from './pages/portal/ProfileSettings';
import Certificate from './pages/portal/Certificate';

// Components
import Navbar from './components/Navbar';
import PortalNavbar from './components/PortalNavbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import ParticleBackground from './components/effects/ParticleBackground';
import CursorGlow from './components/effects/CursorGlow';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.4,
  ease: [0.25, 0.1, 0.25, 1],
};

const AnimatedPage = ({ children }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();
  const isPortalRoute = location.pathname.startsWith('/portal');
  const isAuthRoute = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      <ParticleBackground />
      <CursorGlow />
      
      {!isPortalRoute && !isAuthRoute && <Navbar />}
      {(isPortalRoute || isAuthRoute) && <PortalNavbar />}
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
          <Route path="/schedule" element={<AnimatedPage><Schedule /></AnimatedPage>} />
          <Route path="/tracks" element={<AnimatedPage><Tracks /></AnimatedPage>} />
          <Route path="/sponsors" element={<AnimatedPage><Sponsors /></AnimatedPage>} />
          <Route path="/register" element={<AnimatedPage><Register /></AnimatedPage>} />
          <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<AnimatedPage><Login /></AnimatedPage>} />
          <Route path="/signup" element={<AnimatedPage><Signup /></AnimatedPage>} />
          
          {/* Portal Routes */}
          <Route path="/portal" element={<ProtectedRoute><AnimatedPage><Dashboard /></AnimatedPage></ProtectedRoute>} />
          <Route path="/portal/dashboard" element={<ProtectedRoute><AnimatedPage><Dashboard /></AnimatedPage></ProtectedRoute>} />
          <Route path="/portal/team" element={<ProtectedRoute><AnimatedPage><TeamManagement /></AnimatedPage></ProtectedRoute>} />
          <Route path="/portal/problems" element={<ProtectedRoute><AnimatedPage><ProblemStatements /></AnimatedPage></ProtectedRoute>} />
          <Route path="/portal/submission" element={<ProtectedRoute><AnimatedPage><Submission /></AnimatedPage></ProtectedRoute>} />
          <Route path="/portal/leaderboard" element={<ProtectedRoute><AnimatedPage><Leaderboard /></AnimatedPage></ProtectedRoute>} />
          <Route path="/portal/mentors" element={<ProtectedRoute><AnimatedPage><MentorBooking /></AnimatedPage></ProtectedRoute>} />
          <Route path="/portal/profile" element={<ProtectedRoute><AnimatedPage><ProfileSettings /></AnimatedPage></ProtectedRoute>} />
          <Route path="/portal/certificate" element={<ProtectedRoute><AnimatedPage><Certificate /></AnimatedPage></ProtectedRoute>} />
        </Routes>
      </AnimatePresence>
      
      {!isPortalRoute && !isAuthRoute && <Footer />}
    </div>
  );
}

export default App;

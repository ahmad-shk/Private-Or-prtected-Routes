import { BrowserRouter as Router, Route, Routes, Outlet, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import Product from './pages/Product';
import { useEffect, useState } from 'react';
import { Auth } from './Auth';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { user, token } = Auth();
  const location = useLocation(); // Use useLocation within the Router

  useEffect(() => {
    if (token && user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    console.log('Route changed:', location.pathname); // Log route changes
  }, [location, token, user]); // Track location and auth changes

  return (
    <Routes>
      {/* Public Routes */}
      <Route element={!isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Protected Routes */}
      <Route element={isAuthenticated ? <Outlet /> : <Navigate to="/login" />}>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/product" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

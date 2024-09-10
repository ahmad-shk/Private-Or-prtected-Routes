import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import { useEffect, useState } from 'react';
import Product from './pages/Product';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('User')
    if (token && user) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false);
    }
  }, [])

  return (
    <Router>
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
    </Router>
  );
}

export default App;

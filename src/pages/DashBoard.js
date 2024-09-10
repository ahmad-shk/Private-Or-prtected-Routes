import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Authentication } from '../Auth';

function DashBoard() {
  const navigate = useNavigate();
  const user = localStorage.getItem('User');

  const handleLogout = () => {
    Authentication("", "")
    navigate('/login')
  };


  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <h2>Welcome, {user}!</h2> {/* Display the user */}
          <p>Here are the details of your project:</p>
          <ul>
            <li>Project Name: Sample Project</li>
            <li>Project Description: This is a sample project description.</li>
            <li>Project Deadline: December 31, 2024</li>
            <li>Status: In Progress</li>
          </ul>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DashBoard;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import components with explicit default imports
import DashboardLayout from './components/Dashboard/DashboardLayout';
import Overview from './components/Dashboard/Overview';
import Analytics from './components/Dashboard/Analytics/Analytics';
import Calendar from './components/Dashboard/Calendar';
import Certifications from './components/Dashboard/Certifications';
import Projects from './components/Dashboard/Projects';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PrivateRoute from './components/Auth/PrivateRoute';

// Import styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        
          <Route 
            path="/dashboard" 
            element={
              <DashboardLayout>
                <Overview />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/analytics" 
            element={
              <DashboardLayout>
                <Analytics />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/calendar" 
            element={
              <DashboardLayout>
                <Calendar />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/certifications" 
            element={
              <DashboardLayout>
                <Certifications />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/projects" 
            element={
              <DashboardLayout>
                <Projects />
              </DashboardLayout>
            } 
          />
        

        {/* Redirect root to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { AuthProvider, useAuth } from './AuthContext';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import DashboardScreen from './DashboardScreen';

// This component protects your routes
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/" />;
  
  return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route 
            path="/home" 
            element={
              <ProtectedRoute>
                <HomeScreen />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardScreen />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
      <Analytics />
    </AuthProvider>
  );
}

export default App;

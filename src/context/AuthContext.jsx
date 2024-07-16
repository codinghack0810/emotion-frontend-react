import React, { createContext, useEffect, useState } from 'react';
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    // Validate token with the server and set isAuthenticated accordingly
    setIsAuthenticated(!!token);
  }, []);
  return <AuthContext.Provider value={isAuthenticated}>{children}</AuthContext.Provider>;
};
export { AuthContext, AuthProvider };
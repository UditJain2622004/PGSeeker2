import React, { useEffect, useState } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { checkAuthentication } from "./api";

const ProtectedRoute = ({ component: Component, user }) => {
  console.log(user);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const fetchAuthenticationStatus = async () => {
      try {
        const isAuthenticated = await checkAuthentication();
        setIsAuthenticated(isAuthenticated);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    fetchAuthenticationStatus();
  }, []);

  if (isAuthenticated === null) {
    // Add a loading state if needed while checking authentication
    // return <div>Loading...</div>;
  } else if (isAuthenticated) {
    return <Component user={user} />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;

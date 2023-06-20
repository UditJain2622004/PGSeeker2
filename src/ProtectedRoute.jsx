import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { checkAuthentication } from "./api";

const ProtectedRoute = ({ component: Component }) => {
  const user = useSelector((state) => state.user);
  if (user) {
    return <Component />;
  } else {
    return <Navigate to="/login" replace />;
  }

  // const [isAuthenticated, setIsAuthenticated] = useState(null);

  // useEffect(() => {
  //   const fetchAuthenticationStatus = async () => {
  //     try {
  //       const isAuthenticated = await checkAuthentication();
  //       setIsAuthenticated(isAuthenticated);
  //     } catch (error) {
  //       setIsAuthenticated(false);
  //     }
  //   };

  //   fetchAuthenticationStatus();
  // }, []);

  // if (isAuthenticated === null) {
  //   // Add a loading state if needed while checking authentication
  //   // return <div>Loading...</div>;
  // } else if (isAuthenticated) {
  //   return <Component />;
  // } else {
  //   return <Navigate to="/login" replace />;
  // }
};

export default ProtectedRoute;

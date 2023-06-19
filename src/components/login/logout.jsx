import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../api";

function Logout({ setUser }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    async function logoutAndNavigate() {
      // Perform logout logic here
      await logout();
      setUser();
      // Navigate to the desired route
      navigate("/");
    }

    logoutAndNavigate();
  }, [navigate]);

  return null; // or any loading indicator, as this component doesn't render anything
}

export default Logout;

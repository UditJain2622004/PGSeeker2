import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../api";
import { store } from "../../persistStore";
import swal from "sweetalert";

function Logout({ setUser }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    async function logoutAndNavigate() {
      let loadingOverlay = document.querySelector(".loading-overlay");
      loadingOverlay.style.display = "block";
      const response = await logout();
      loadingOverlay.style.display = "none";
      if (response.status === "success") {
        store.dispatch({ type: "CLEAR_USER" });
        navigate("/");
        window.scrollTo(0, 0);
      } else {
        swal(
          "Error!",
          `${response.error} 
        Could Not Log Out.`,
          "error"
        );
        navigate("/");
        window.scrollTo(0, 0);
      }
    }

    logoutAndNavigate();
  }, [navigate]);

  return (
    <>
      <div class="loading-overlay">
        <div class="loading-spinner"></div>
      </div>
    </>
  );
}

export default Logout;

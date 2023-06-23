import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../api";
import { store } from "../../persistStore";
import swal from "sweetalert";

function Logout({ setUser }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    async function logoutAndNavigate() {
      // Perform logout logic here
      let loadingOverlay = document.querySelector(".loading-overlay");
      // let errorMessage = document.querySelector(".error-msg");
      loadingOverlay.style.display = "block";
      const response = await logout();
      // setUser();
      loadingOverlay.style.display = "none";
      if (response.status === "success") {
        store.dispatch({ type: "CLEAR_USER" });
        navigate("/");
        window.scrollTo(0, 0);
      } else {
        // errorMessage.textContent = response.error;
        // errorMessage.style.display = "block";
        // setTimeout(function () {
        //   errorMessage.style.display = "none";
        //   navigate("/");
        //   window.scrollTo(0, 0);
        // }, 2000);
        swal(
          "Error!",
          `${response.error} 
        Could Not Log Out.`,
          "error"
        );
        navigate("/");
        window.scrollTo(0, 0);
      }

      // Navigate to the desired route
    }

    logoutAndNavigate();
  }, [navigate]);

  return (
    <>
      <div class="loading-overlay">
        <div class="loading-spinner"></div>
      </div>
      {/* <div class="message error-msg">
        <i class="error-icon">&#10007;</i>
        <p></p>
      </div> */}
    </>
  ); // or any loading indicator, as this component doesn't render anything
}

export default Logout;

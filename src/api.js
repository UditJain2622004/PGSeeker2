export const allPgs = async (filters) => {
  try {
    console.log(filters);
    const response = await fetch("http://localhost:5000/api/v1/pg/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filters),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return {
      status: "requestFail",
      error: "Something Went Wrong.",
    };
  }
};

// api.js
export const createPG = async (pgData) => {
  try {
    console.log(pgData);
    const response = await fetch("http://localhost:5000/api/v1/pg", {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: pgData,
      credentials: "include",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return {
      status: "requestFail",
      error: "Something Went Wrong.",
    };
  }
};

export const login = async (email, password) => {
  try {
    const response = await fetch("http://localhost:5000/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return {
      status: "requestFail",
      error: "Something Went Wrong.",
    };
  }
};

export const logout = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/v1/user/logout", {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return {
      status: "requestFail",
      error: "Something Went Wrong.",
    };
  }
};

export const signup = async (name, email, password, passwordConfirm) => {
  try {
    const response = await fetch("http://localhost:5000/api/v1/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, passwordConfirm }),
      credentials: "include",
    });
    console.log(response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "requestFail",
      error: "Something Went Wrong.",
    };
  }
};

export const checkAuthentication = async () => {
  // Make an API call to your backend to check for authentication
  try {
    const response = await fetch(
      "http://localhost:5000/api/v1/user/isLoggedIn",
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }
    );
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

// actions.js
export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const getPG = async (pgID) => {
  try {
    const response = await fetch(`http://localhost:5000/api/v1/pg/${pgID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return {
      status: "requestFail",
      error: "Something Went Wrong.",
    };
  }
};

export const getReviews = async (pgID) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/pg/${pgID}/reviews`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return {
      status: "requestFail",
      error: "Something Went Wrong.",
    };
  }
};
export const createReview = async (review, rating, pgID, user) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/pg/${pgID}/reviews`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ review, rating, user }),
        credentials: "include",
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return {
      status: "requestFail",
      error: "Something Went Wrong.",
    };
  }
};

export const getProfile = async (userID) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/user/me/${userID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return {
      status: "requestFail",
      error: "Something Went Wrong.",
    };
  }
};

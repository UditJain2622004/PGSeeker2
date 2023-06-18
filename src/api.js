export const allPgs = async (filters) => {
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
};

// api.js
export const createPG = async (pgData) => {
  console.log(pgData);
  const response = await fetch("http://localhost:5000/api/v1/pg", {
    method: "POST",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    body: pgData,
  });

  const data = await response.json();
  return data;
};

export const login = async (email, password) => {
  const response = await fetch("http://localhost:5000/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  return data;
};

export const signup = async (name, email, password, passwordConfirm) => {
  const response = await fetch("http://localhost:5000/api/v1/user/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password, passwordConfirm }),
  });

  const data = await response.json();
  return data;
};

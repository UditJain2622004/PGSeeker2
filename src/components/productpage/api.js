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

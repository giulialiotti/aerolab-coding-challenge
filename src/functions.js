/* ---------------- VARIABLES ---------------- */

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZlOWRhY2Q0MDc0YzAwMjE0M2RkZmQiLCJpYXQiOjE2NDQwNzY0NjB9.qCiQ-2Lx8p3-2ynQR3a7t6FUSLKXHPvWOm6BnvTsbaI";
const addPointsUrl = "https://coding-challenge-api.aerolab.co/user/points";

/* ---------------- FUNCTIONS ---------------- */

// Reusable function to get data from endpoints
export async function getData(url) {
  try {
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    let data = await response.json();

    return data;
  } catch (e) {
    console.log(`Request failed! : ${e}`);
    return e;
  }
}

// Sort array by cost
export function sortProducts(a, b) {
  return a.cost - b.cost;
}

// Add points to user
export async function addPoints(amount) {
  try {
    let response = await fetch(addPointsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(amount)
    });
    let data = await response.json();

    return data;
  } catch (e) {
    console.log(`Request failed! : ${e}`);
    return e;
  }
}

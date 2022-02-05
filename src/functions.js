const url = "https://coding-challenge-api.aerolab.co/products";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZlOWRhY2Q0MDc0YzAwMjE0M2RkZmQiLCJpYXQiOjE2NDQwNzY0NjB9.qCiQ-2Lx8p3-2ynQR3a7t6FUSLKXHPvWOm6BnvTsbaI";

// Fetch products from API 
export async function getProducts() {
  try {
    let response = await fetch(url, {
      method: "GET",
      headers: {
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

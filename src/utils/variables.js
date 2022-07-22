// User endpoint
const userUrl = "https://coding-challenge-api.aerolab.co/user/me";

// Add points endpoint
const addPointsUrl = "https://coding-challenge-api.aerolab.co/user/points";

// Redeem product endpoint
const redeemProductUrl = "https://coding-challenge-api.aerolab.co/redeem";

// Products endpoint
const productsUrl = "https://coding-challenge-api.aerolab.co/products";

// Array of points amounts to add
const points = [
  {
    amount: 1000,
  },
  {
    amount: 5000,
  },
  {
    amount: 7500,
  },
];

// Months array for date
const months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

const sortButtons = [
  {
    order: "Most Recent",
  },
  {
    order: "Lowest Price",
  },
  {
    order: "Highest Price",
  },
];

const allProducts = "All products";

export {
  userUrl,
  addPointsUrl,
  redeemProductUrl,
  productsUrl,
  points,
  months,
  sortButtons,
  allProducts
};

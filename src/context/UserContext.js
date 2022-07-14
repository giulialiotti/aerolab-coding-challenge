import React, { createContext } from "react";

// Functions
import { getData, addItem } from "utils/functions";

// User endpoint
const userUrl = "https://coding-challenge-api.aerolab.co/user/me";
// Add points endpoint
const addPointsUrl = "https://coding-challenge-api.aerolab.co/user/points";
// Redeem product endpoint
const redeemProductUrl = "https://coding-challenge-api.aerolab.co/redeem";

export const UserContext = createContext();

export const useUserContext = () => React.useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({});
  const [addItemSucces, setAddItemSucces] = React.useState(false);

  // Set user fetched from api
  React.useEffect(() => {
    getData(userUrl).then((user) => {
      setUser(user);
    });
  }, []);

  // Adding points and refresh user
  const handleAddPoints = (body, amount) => {
    addItem(body, addPointsUrl).then((points) => {
      setUser({ ...user, points: user.points + amount });
      console.log(points);
    });
  };

  // Redeem product and save and save it in user redeem history
  const handleRedeemProduct = (item) => {
    addItem(item, redeemProductUrl).then((product) => {
      user.redeemHistory.push(product);
      setAddItemSucces(true);
      console.log(product);
    });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        handleAddPoints,
        handleRedeemProduct,
        addItemSucces,
        setAddItemSucces,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

import React, { createContext } from "react";

// functions
import { getData, addItem } from "../functions";

// user endpoint
const userUrl = "https://coding-challenge-api.aerolab.co/user/me";
// add points endpoint
const addPointsUrl = "https://coding-challenge-api.aerolab.co/user/points";
// redeem product endpoint
const redeemProductUrl = "https://coding-challenge-api.aerolab.co/redeem";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({});
  const [addItemSucces, setAddItemSucces] = React.useState(false);

  const updateUser = () => {
    getData(userUrl).then((user) => {
      setUser(user);
    });
  };

  // Set user fetched from api
  React.useEffect(() => {
    updateUser();
  }, []);

  // Adding points and refresh user
  const handleAddPoints = (body) => {
    addItem(body, addPointsUrl).then((points) => {
      updateUser();
    });
  };

  const handleRedeemProduct = (item) => {
    addItem(item, redeemProductUrl).then((product) => {
      user.redeemHistory.push(product);
      setAddItemSucces(true);
      updateUser();
    });
  };

  return (
    <UserContext.Provider
      value={{
        user,
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

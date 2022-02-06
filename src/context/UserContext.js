import React, { createContext } from "react";

// functions
import { getData, addPoints } from "../functions";

// user endpoint
const userUrl = "https://coding-challenge-api.aerolab.co/user/me";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState([]);

  // Set user fetched from api
  React.useEffect(() => {
    getData(userUrl).then((user) => {
      setUser(user);
    });
  }, []);

  // Adding points and refresh user
  const handleAddPoints = (body) => {
    addPoints(body).then((points) => {
      getData(userUrl).then((user) => {
        setUser(user);
      });
    });
  };

  return (
    <UserContext.Provider value={{ user, handleAddPoints }}>
      {children}
    </UserContext.Provider>
  );
};

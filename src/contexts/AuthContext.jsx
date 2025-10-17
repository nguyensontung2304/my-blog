import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  isLogged: false,
  isLoading: false,
  isError: false,
  user: null,
  login: (username, password) => {
    //noop
  },
  logout: () => {
    //noop
  },
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const login = (email, password) => {
    setIsError(false);
    setLoading(true);

    fetch("https://67e105a058cc6bf78523e2e1.mockapi.io/api/v1/auth")
      .then((res) => res.json())
      .then((res) => {
        const timThayAccount = res.find(
          (item) => item.email === email && item.password === password
        );

        if (timThayAccount) {
          setUser(timThayAccount);
          setIsLogged(true);
          localStorage.setItem("thongTinUser", JSON.stringify(timThayAccount));
        } else {
          setIsError(true);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const logout = () => {
    setIsLogged(false);
    setUser(null);
    localStorage.removeItem("thongTinUser");
  };

  useEffect(() => {
    try {
      const saveUserKey = localStorage.getItem("thongTinUser");
      const user = JSON.parse(saveUserKey);
      if (user) {
        setIsLogged(true);
        setUser(user);
      }
    } catch (error) {
      //noop
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isLogged,
        isError,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

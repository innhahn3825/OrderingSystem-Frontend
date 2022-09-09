import React, { createContext, useContext, useState } from 'react';
import AccountLogin from "../../models/AccountLogin.tsx";

const UserContext = createContext();
const UserUpdateContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(new AccountLogin("", "", ""));

  const handleUserOnChange = (username, password, employeeName) => {
    setUser(new AccountLogin(username, password, employeeName));
  }

  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={handleUserOnChange}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}

export function useUserUpdate() {
  return useContext(UserUpdateContext);
}
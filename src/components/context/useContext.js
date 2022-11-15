import { createContext, useContext, useState } from "react";

export const UserContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});
const USER = { name: "", pass: true };
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(USER);
  function login(username) {
    setUser({ name: username, pass: false });
  }
  function logout() {
    setUser({ name: "", pass: true });
  }
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function UseUserContext() {
  const { user, login, logout } = useContext(UserContext);
  return {
    user,
    login,
    logout,
  };
}

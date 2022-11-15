import "./App.css";

import { UserContextProvider } from "./components/context/useContext";
import Auth from "./components/auth/Auth";

function App() {
  return (
    <UserContextProvider>
      <Auth />
    </UserContextProvider>
  );
}

export default App;

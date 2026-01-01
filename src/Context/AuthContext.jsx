import { createContext, useState } from "react";

export let AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("userToken") || null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        isLoading,
        setIsLoading,
        showPass,
        setShowPass,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

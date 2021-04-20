import React, { createContext } from "react";

interface AuthContextData {
  name: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  return (
    <AuthContext.Provider value={{ name: "lucas" }}>
      {children}
    </AuthContext.Provider>
  );
};

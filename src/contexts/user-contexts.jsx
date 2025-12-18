import React, { createContext, useState, useEffect, useContext } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          const storedUser = localStorage.getItem("user");
          if (storedUser) {
               try {
                    setUser(JSON.parse(storedUser));
               } catch (error) {
                    console.error(
                         "Error parsing user data from local storage:",
                         error,
                    );
               }
          }
          setLoading(false);
     }, []);

     const login = (userData) => {
          setUser(userData);
     };

     const logout = () => {
          setUser(null);
     };

     return (
          <UserContext.Provider
               value={{
                    user,
                    loading,
                    login,
                    logout,
                    isLoggedIn: !!user,
               }}
          >
               {children}
          </UserContext.Provider>
     );
}

export function useUser() {
     const context = useContext(UserContext);

     if (!context) {
          throw new Error("useUser must be used within a UserProvider");
     }

     return context;
}

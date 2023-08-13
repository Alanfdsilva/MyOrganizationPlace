import { createContext, useContext, useState } from 'react';
import { api_url } from '../services/api_url';

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider.');
  }

  return context;
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function login (email, password){
    try {
      const response = await api_url.post('user/login', {
        email,
        password
      })
      if(response.status) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async function logout() {

  }

  return (
    <AuthContext.Provider 
      value={{ 
        isLoggedIn, 
        login, 
        logout 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
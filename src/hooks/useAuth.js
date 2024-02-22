import axios from 'axios';
import { atom } from 'jotai';
import { useAtom } from 'jotai';

const authAtom = atom(false);

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useAtom(authAtom);

  const login = async (username, password) => {
    try {
      const response = await axios.post('https://example.com/api/login', {
        username,
        password,
      });
      const { access_token } = response.data;
      setIsAuthenticated(true);
      localStorage.setItem('access_token', access_token);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('access_token');
  };

  return { isAuthenticated, login, logout, useAuth};
};
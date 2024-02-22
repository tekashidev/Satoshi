import { atom } from 'jotai';
import { useAtom } from 'jotai';

const authAtom = atom(false);

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useAtom(authAtom);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('access_token', 'your_access_token_here');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('access_token');
  };

  return { isAuthenticated, login, logout };
};
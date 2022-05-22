import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const usePersistAuth = () => {
  const loginStatus = useSelector(
    (state) => state.authentication.isUserLoggedIn,
  );
  const currentUser = useSelector((state) => state.authentication.currentUser);
  const token = useSelector((state) => state.authentication.token);

  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(currentUser));
    localStorage.setItem('login-status', JSON.stringify(loginStatus));
  }, [loginStatus, currentUser, token]);
};

export { usePersistAuth };

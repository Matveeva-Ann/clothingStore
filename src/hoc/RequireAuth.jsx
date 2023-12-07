import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const isLogin = useSelector(state => state.login);

  if (!isLogin) {
    return <Navigate to="/loginPage"></Navigate>;
  }
  return children;
}

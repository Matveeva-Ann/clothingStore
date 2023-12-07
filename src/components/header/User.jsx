import IconButton from 'containers/IconButton/IconButton';
import { NavLink } from 'react-router-dom';
import { iconSize } from 'constants';
import { useSelector } from 'react-redux';
import { FaUserCheck, FaUser } from 'react-icons/fa6';

export default function User() {
  const isUserLogin = useSelector(store => store.login);

  return (
    <NavLink to={isUserLogin ? '/userPage' : '/loginPage'}>
      {({ isActive }) => (
        <>
          {isUserLogin ? (
            <IconButton
              ariaLabel={'user'}
              style={{ position: 'relative' }}
              background={isActive ? 'grayText' : 'backgroundAccent'}
            >
              <FaUserCheck size={iconSize.sm} />
            </IconButton>
          ) : (
            <IconButton
              ariaLabel={'user'}
              style={{ position: 'relative' }}
              background={isActive ? 'grayText' : 'backgroundAccent'}
            >
              <FaUser size={iconSize.sm} />
            </IconButton>
          )}
        </>
      )}
    </NavLink>
  );
}

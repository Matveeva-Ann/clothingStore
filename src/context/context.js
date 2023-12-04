import { createContext } from 'react';

const AppContext = createContext({
  value: true,
  setValue: () => {},
});

export default AppContext;
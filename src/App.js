import './styleReset.css';
import './fonts/fonts.css';
import AppRoutes from 'AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { useEffect, useState } from 'react';
import AppContext from 'context/context';

export default function App() {
  const [contextValue, setContextValue] = useState(true);
  const setContextValueFunction = (newValue) => {
    setContextValue(newValue);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'BASE');
  }, [])

  return (
    <AppContext.Provider value={{ value: contextValue, setValue: setContextValueFunction }}>
      <AppRoutes></AppRoutes>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </AppContext.Provider>
  )
}

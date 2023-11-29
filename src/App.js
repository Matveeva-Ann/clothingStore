import './styleReset.css';
import './fonts/fonts.css';
import AppRoutes from 'AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { useEffect } from 'react';

export default function App() {
  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'BASE');
   }, [])

  return(
    <>
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
    </>
  )
}

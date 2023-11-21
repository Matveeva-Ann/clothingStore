import './styleReset.css';
import './fonts/fonts.css';
import AppRoutes from 'AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

export default function App() {

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

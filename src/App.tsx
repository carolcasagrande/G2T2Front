import React from 'react';
import { BrowserRouter } from 'react-router-dom';
/* import { ToastContainer } from 'react-toastify'; */
import Routes from './routes';
import './style/global.css';
/* import 'react-toastify/dist/ReactToastify.css'  */

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
   {/*  <ToastContainer/>     */}
    </>
  );
}

export default App;

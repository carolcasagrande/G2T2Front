import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; 
import Routes from './routes';
import './style/global.css';
import 'react-toastify/dist/ReactToastify.css'  

import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
     {/*  <Navbar /> */}
      <Routes />
      <Footer />
    </BrowserRouter>
    <ToastContainer/>    
    </>
  );
}

export default App;

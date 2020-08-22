import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

import './assets/styles/global.css'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;

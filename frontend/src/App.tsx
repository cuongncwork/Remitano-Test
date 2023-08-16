import React, { FunctionComponent } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

type AppProps = {};

const App: FunctionComponent = (props: AppProps) => {
  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default App;

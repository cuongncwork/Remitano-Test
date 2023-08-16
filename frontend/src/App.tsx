import React, { FunctionComponent } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes';

type AppProps = {};

const App: FunctionComponent = (props: AppProps) => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};

export default App;

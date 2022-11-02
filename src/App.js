// import Router from './utils/Router';
import { Fragment } from 'react';
import React from 'react';
import Navbar from './components/Navbar';
import './App.scss';

const Routing = React.lazy(() => import('./utils/Router'));

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routing />
    </Fragment>
  );
}

export default App;

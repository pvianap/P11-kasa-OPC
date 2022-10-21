import './App.css';
// import Router from './utils/Router';
import { Fragment } from 'react';
import React, { Suspense } from 'react';

const Routing = React.lazy(() => import('./utils/Router'));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routing />
      </Suspense>
    </Fragment>
  );
}

export default App;

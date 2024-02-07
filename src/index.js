// # +====================================================================================+ #
// # |====================================  HappyNess  ===================================| #
// # |======================    taskify app - intergration test    =======================| #
// # |======================= Programmer: NDANG ESSI Pierre Junior =======================| #
// # +====================================================================================+ #

// REACT IMPORTS
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

// REDUX IMPORTS
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { store } from './redux/store';

// COMPONENTS 
import App from './App';
import reportWebVitals from './reportWebVitals';

// STYLE
import './index.scss';

// store to persit
const persistedStore = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistedStore}>
          <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

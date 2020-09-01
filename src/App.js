import React from 'react';
import logo from './logo.svg';
import Component from "./components/Component";
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Component />
      </div>
    </Provider>
  );
}

export default App;

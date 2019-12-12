// jshint esversion:6
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('austin-service');
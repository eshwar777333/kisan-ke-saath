import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import { Provider } from 'react-redux'
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import store from './store';
import './bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

dotenv.config('./../.env');
Kommunicate.init("3a6f67a41f128beac9fd9c893da3bc8b7", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

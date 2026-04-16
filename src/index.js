import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, createStore } from 'redux';
import { counterReducer } from './Reducer/counterReducer';
import { Provider } from 'react-redux';
import { userReducer } from './Reducer/userReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rootReducer=combineReducers({
  count:counterReducer,
  user:userReducer
})
const store = createStore(rootReducer)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

console.log(store.getState())
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

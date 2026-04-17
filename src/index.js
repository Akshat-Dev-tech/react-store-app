import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { combineReducers, createStore } from 'redux';
// import { counterReducer } from './Reducer/counterReducer';
import { Provider } from 'react-redux';
// import { userReducer } from './Reducer/userReducer';
import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './Reducer/counterReducer';
import{ userSlice } from './Reducer/userReducer';
import { BrowserRouter } from 'react-router-dom';
import { productReducer } from './Reducer/productReducer';
import { loaderReducer } from './Reducer/loaderReducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
// const rootReducer=combineReducers({
//   count:counterReducer,
//   user:userReducer
// })

const rootReducer = configureStore({
  reducer: {
    count: counterSlice.reducer,
    user: userSlice.reducer,
    product: productReducer,
    loader: loaderReducer
  }
})
const store = rootReducer
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
);

console.log(store.getState())
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

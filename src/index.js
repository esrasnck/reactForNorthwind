import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import { configureStore } from './store/configureStore';


const store = configureStore()

// sanal bir virtual dom

ReactDOM.render(   // tüm uygulamayı provider ile sarmalla diyorum (react-redux ile) burada bir store geç diyorum
  <Provider store={store}>  
   <BrowserRouter> <App /></BrowserRouter> 
   </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// root component app. ilk başlanan component
// component drilling => componentleri yukardan aşağı / aşağıdan yukarı taşımak.
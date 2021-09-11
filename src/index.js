import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {ContextProvider} from "./Context"

ReactDOM.render(

  <ContextProvider>
  <BrowserRouter  basename="/react-small-ecommerce-mock-website">
    <App />
  </BrowserRouter>
  </ContextProvider>
  ,
  document.getElementById('root')
);


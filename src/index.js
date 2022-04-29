import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SkeletonTheme } from 'react-loading-skeleton';
import './main.css'

ReactDOM.render(
  // <React.StrictMode>
  <SkeletonTheme baseColor="#232e3d" highlightColor="#1c2636">
    <App />
  </SkeletonTheme>
  // </React.StrictMode>
  ,
  document.getElementById('root'))


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomeScreen from './Components/HomeScreen';
import WebcamCapture from './Components/WebcamCapture';

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>

ReactDOM.render(
  <HomeScreen />,
  document.getElementById('root')
);

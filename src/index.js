import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StepContext from './StepContext'

ReactDOM.render(
  <StepContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StepContext>,
  document.getElementById('root')
);


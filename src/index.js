import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'mobx-react';
import CounterStore from './store/CounterStore';

ReactDOM.render(
  <Provider value={CounterStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

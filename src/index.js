import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import App from './containers/App/App';
import './index.scss';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

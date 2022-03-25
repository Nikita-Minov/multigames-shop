import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import './assets/css/reset-styles.css';
import store from './redux/redux-store';
import {Provider} from 'react-redux';
import {CookiesProvider} from 'react-cookie';

ReactDOM.render(
    <Provider store={store}>
      <CookiesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CookiesProvider>
    </Provider>,
    document.getElementById('root'),
);

import * as React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './assets/css/reset-styles.css';
import store from './redux/redux-store';
import {Provider} from 'react-redux';
import {CookiesProvider} from 'react-cookie';
import AppContainer from './AppContainer';

ReactDOM.render(
    <Provider store={store}>
      <CookiesProvider>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </CookiesProvider>
    </Provider>,
    document.getElementById('root'),
);

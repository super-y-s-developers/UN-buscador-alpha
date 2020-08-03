import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from 'services/reducers';
import { ThemeProvider } from 'styled-components';

// Pages
import App from './App';
import Storybook from './storybook';

// GlobalStyle
import theme from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyle';

// Redux store
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Storybook />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

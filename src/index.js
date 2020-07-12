import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core'
import theme from './Theme'
import { CustomCssBaseline } from './Theme'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from './Middleware/Logger'
import rootReducer from './Store/Reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, 
  composeEnhancers(
    applyMiddleware(loggerMiddleware, thunkMiddleware))
);

console.log("INITIAL STATE: ", store.getState())

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CustomCssBaseline />
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
unsubscribe()
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
 import {compose,applyMiddleware, createStore} from "redux";
 import thunk from "redux-thunk";
 import combinedReducer from "./redux/reducers";
import {BrowserRouter} from "react-router-dom";
// import store from "./redux/store";
 const composeEnchanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(
     combinedReducer,
     composeEnchanser(applyMiddleware(thunk))
 );
ReactDOM.render(
  <React.StrictMode>
      < BrowserRouter>
          <Provider store={store}>
              <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

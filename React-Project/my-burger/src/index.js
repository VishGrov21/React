import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import orderReducer from './store/reducers/orderReducer';
import burgerBuilderReducer from './store/reducers/burgerBuilderReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  burgerBuilderReducer: burgerBuilderReducer,
  orderReducer: orderReducer
})

const appStore = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)))

const app = (
  <Provider store={appStore}>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'));
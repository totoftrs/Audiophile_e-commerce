import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducer/cartReducer';

const initialState = {
   cart: [],
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    cartReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
  
export default store;
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import lca from './reducers/lca';


const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const reducers = {
    lca,
    routing: routerReducer,
    form: formReducer,
};

const store = createStoreWithMiddleware(
    combineReducers(reducers),
    {},
    window.devToolsExtension && window.devToolsExtension(),
);

export default store;

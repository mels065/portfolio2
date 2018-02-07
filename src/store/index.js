import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from '../reducers';

const middleware = applyMiddleware(promiseMiddleware(), thunk, logger);

export default createStore(reducers, middleware);

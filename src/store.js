import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { treesRootSaga, pathsRootSaga } from "./middleware";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const enhancer = composeEnhancers(middleware);
const store = createStore(
    rootReducer,
    undefined,
    enhancer
);
sagaMiddleware.run(pathsRootSaga);
sagaMiddleware.run(treesRootSaga);


export default store;
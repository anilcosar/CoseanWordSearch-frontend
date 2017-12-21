import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createMiddleware from './middleware/clientMiddleware'
import ApiClient from '../helpers/ApiClient';
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'

export const history = createHistory()
export const client = new ApiClient();

const initialState = {}
const enhancers = []
const middleware = [
    thunk,
    createMiddleware(client),
    routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const _store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
)


const store = _store;
export default store;
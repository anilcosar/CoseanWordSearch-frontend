import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import urls from './url'
import keywords from './keywords'

export default combineReducers({
    routing: routerReducer,
    urls,
    keywords

})
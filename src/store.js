import {createStore, combineReducers} from 'redux'
import homepage from './containers/Homepage'

const reducers = combineReducers({homepage})

export default createStore(reducers)
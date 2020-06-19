import {combineReducers} from 'redux'
import redReducer from './RedReducer'
import blueReducer from './BlueReducer'

const rootReducer = combineReducers({
    redReducer : redReducer,
    blueReducer: blueReducer
}) 

export default rootReducer;


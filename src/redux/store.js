import { combineReducers } from 'redux'
import counterReducer from './reducers/counter'
import userReducer from './reducers/user'

// Object yg masuk ke dalam combineReducer akan menjadi parameter "state" di callback function useSelector

const rootReducer = combineReducers ({
    user: userReducer,
    counter: counterReducer
})

export default rootReducer

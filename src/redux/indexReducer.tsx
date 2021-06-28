import { combineReducers } from 'redux';
import AuthcationReducer from './auth/reducer'

const indexReducer = combineReducers({
    auth: AuthcationReducer,
});

export default indexReducer;
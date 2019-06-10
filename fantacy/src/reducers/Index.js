import {combineReducers} from 'redux';
import authReducer from './authReducer';
import playReducer from './playReducer';


export default combineReducers({
    auth:authReducer,
    play:playReducer
  
}) 
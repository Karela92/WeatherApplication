import { combineReducers } from 'redux';
import weatherReducer from './weather/reducers'

export default combineReducers({
  weather: weatherReducer
})
import {
  SET_CURRENT_CITY_NAME, WEATHER_RESPONSE_SUCCESS, WEATHER_RESPONSE_FAILURE,
  SET_SELECTED_CITY,PUSH_TO_CITIES_LIST, UPDATE_CITIES_LIST
} from './actions';
import citiesList from '../../../src/cities.json';

const initialState = {
  currentCity: '',
  errorMessage: '',
  citiesList: localStorage.getItem('popularCities') ? JSON.parse(localStorage.getItem('popularCities')) : citiesList
};

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_CITY_NAME:
      return { ...state, currentCity: action.payload };

    case WEATHER_RESPONSE_SUCCESS:
      return {
        ...state,
        weatherInfo: action.payload,
        errorMessage: ''
      };

    case PUSH_TO_CITIES_LIST:
      return {
        ...state,
        weatherInfo: action.payload,
        errorMessage: '',
        citiesList: [ action.payload, ...state.citiesList ]
      };

    case UPDATE_CITIES_LIST:
      return {
        ...state,
        citiesList: [ ...action.payload ]
      };

    case WEATHER_RESPONSE_FAILURE:
      return { ...state, errorMessage: action.payload };

    case SET_SELECTED_CITY:
      return {
        ...state,
        currentCity: action.payload.name,
        errorMessage: '',
        weatherInfo: action.payload
      };

    default:
      return state;
  }
}
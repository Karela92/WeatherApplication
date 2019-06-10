import {
  CURRENT_CITY_NAME, WEATHER_RESPONSE_SUCCESS, WEATHER_RESPONSE_FAILURE,
  GET_SELECTED_CITY,PUT_SELECTED_CITY, UPDATED_CITIES_LIST
} from './actions';
import citiesList from '../../../src/cities.json';

const initialState = {
  currentCity: '',
  errorMessage: '',
  citiesList: localStorage.getItem('popularCities') ? JSON.parse(localStorage.getItem('popularCities')) : citiesList
};

export default (state = initialState, action) => {
  switch(action.type) {
    case CURRENT_CITY_NAME:
      return { ...state, currentCity: action.payload };

    case WEATHER_RESPONSE_SUCCESS:
      return {
        ...state,
        weatherInfo: action.payload,
        errorMessage: ''
      };

    case PUT_SELECTED_CITY:
      return {
        ...state,
        weatherInfo: action.payload,
        errorMessage: '',
        citiesList: [ action.payload, ...state.citiesList ]
      };

    case UPDATED_CITIES_LIST:
      return {
        ...state,
        citiesList: [ ...action.payload ]
      };

    case WEATHER_RESPONSE_FAILURE:
      return { ...state, errorMessage: action.payload };

    case GET_SELECTED_CITY:
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
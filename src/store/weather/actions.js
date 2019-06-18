export const  SET_CURRENT_CITY_NAME = 'CURRENT_CITY_NAME',
              WEATHER_RESPONSE_SUCCESS = 'WEATHER_RESPONSE_SUCCESS',
              WEATHER_RESPONSE_FAILURE = 'WEATHER_RESPONSE_FAILURE',
              SET_SELECTED_CITY = 'SET_SELECTED_CITY',
              UPDATE_CITIES_LIST = 'UPDATE_CITIES_LIST',
              PUSH_TO_CITIES_LIST = 'PUSH_TO_CITIES_LIST';

export const handleCityChange = cityName => {
  return {
    type: SET_CURRENT_CITY_NAME,
    payload: cityName,
  }
};

export const getWeatherData = (weatherFromApi, needPuToCities) => {
  if (weatherFromApi.cod === 200 && !needPuToCities) {
    return {
      type: WEATHER_RESPONSE_SUCCESS,
      payload: weatherFromApi,
    }
  } else if (weatherFromApi.cod === 200 && needPuToCities) {
    return {
      type: PUSH_TO_CITIES_LIST,
      payload: weatherFromApi,
    }
  } else {
    return {
      type: WEATHER_RESPONSE_FAILURE,
      payload: weatherFromApi.message,
    }
  }
};

export const getSelectedCity = city => {
  return {
    type: SET_SELECTED_CITY,
    payload: city,
  }
};

export const updatedCitiesList = newList => {
  return {
    type: UPDATE_CITIES_LIST,
    payload: newList,
  }
};


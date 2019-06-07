export const CURRENT_CITY_NAME = 'CITY_NAME';
export const WEATHER_RESPONSE_SUCCESS = 'WEATHER_RESPONSE_SUCCESS';
export const WEATHER_RESPONSE_FAILURE = 'WEATHER_RESPONSE_FAILURE';
export const GET_SELECTED_CITY = 'GET_SELECTED_CITY';
export const UPDATED_CITIES_LIST = 'UPDATED_CITIES_LIST';
export const PUT_SELECTED_CITY = 'PUT_SELECTED_CITY';

export const handleCityChange = cityName => {
  return {
    type: CURRENT_CITY_NAME,
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
      type: PUT_SELECTED_CITY,
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
    type: GET_SELECTED_CITY,
    payload: city,
  }
};

export const updatedCitiesList = newList => {
  return {
    type: UPDATED_CITIES_LIST,
    payload: newList,
  }
};


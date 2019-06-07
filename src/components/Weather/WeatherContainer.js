import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleCityChange, getWeatherData, getSelectedCity, updatedCitiesList } from '../../store/weather/actions';

import WeatherForm from './WeatherForm/WeatherForm';
import WeatherView from './WeatherView/WeatherView';
import WeatherCitiesList from './WeatherCitiesList/WeatherCitiesList';

import './WeatherContainer.scss';

const API_KEY = '0a71e4be0150fcc05b75259e783f90c7';

class WeatherContainer extends Component {

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async position =>  {
        const { latitude, longitude } = position.coords;
        const apiCall = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${latitude.toFixed(2)}&lon=${longitude.toFixed(2)}&appid=${API_KEY}&units=metric`
        );
        const initialUserCity = await apiCall.json();
        this.props.getSelectedCity(initialUserCity)
      })
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  render() {
    const {
      currentCity, getWeatherData, weatherInfo, errorMessage
      , citiesList, handleCityChange, getSelectedCity, updatedCitiesList
    } = this.props;
    return(
      <div>
        <WeatherForm
          getWeatherData={ getWeatherData }
          currentCity={ currentCity }
          handleCityChange={ handleCityChange }
          citiesList={ citiesList }
        />
        <div className='container'>
          <WeatherCitiesList
            getSelectedCity={ getSelectedCity }
            citiesList={ citiesList }
            updatedCitiesList={ updatedCitiesList }
          />
          <WeatherView
            weatherInfo={ weatherInfo }
            error={ errorMessage }
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentCity: state.weather.currentCity,
    weatherInfo: state.weather.weatherInfo,
    errorMessage: state.weather.errorMessage,
    citiesList: state.weather.citiesList
  }
};

const mapDispatchToProps = {
  handleCityChange,
  getWeatherData,
  getSelectedCity,
  updatedCitiesList
};


export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);

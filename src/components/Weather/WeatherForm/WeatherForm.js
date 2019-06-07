import React, { Component } from 'react';

import FormInput from './FormInput/FormInput';
import Submit from './Button/Submit/Submit';
import AddButton from './Button/AddButton/AddButton';

import './WeatherForm.scss';

const API_KEY = '0a71e4be0150fcc05b75259e783f90c7';

export default class WeatherForm extends Component {

  async getWeatherFromApi(needToPush = false) {
    const { currentCity, getWeatherData } = this.props;
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${currentCity},country&appid=${API_KEY}&units=metric`);
    const data = await apiCall.json();
    getWeatherData(data, needToPush);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getWeatherFromApi();
  }

  getNewCity(event) {
    event.preventDefault();
    const { currentCity, citiesList } = this.props;
    const alreadyHaveCity = citiesList.find(city => city.name === currentCity);
    if (!alreadyHaveCity) {
      this.getWeatherFromApi(true);
    }
  }

  render() {
    const { handleCityChange, currentCity } = this.props;
    return (
      <div className='weather__form '>
        <form>
          <FormInput
            placeHolder={ 'Enter the city' }
            value={ currentCity }
            handleInputChange={ (ev) => handleCityChange(ev.target.value) }
          />
          <AddButton
            handleAddNewCity={ (ev) => this.getNewCity(ev) }
            disabled={ !currentCity }
          />
          <Submit
            disabled={ !currentCity }
            handleSubmit={ (ev) => this.handleSubmit(ev) }
          />
        </form>
      </div>
    );
  }
}
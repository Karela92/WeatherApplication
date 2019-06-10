import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../../ui/Tooltip/Tooltip'
import FormInput from './FormInput/FormInput';
import Submit from './Button/Submit/Submit';
import AddButton from './Button/AddButton/AddButton';

import './WeatherForm.scss';

const API_KEY = '0a71e4be0150fcc05b75259e783f90c7';

export default class WeatherForm extends Component {

  static propTypes = {
    getWeatherData: PropTypes.func,
    citiesList: PropTypes.array,
    handleCityChange: PropTypes.func,
    currentWeatherCity: PropTypes.string,
    currentCity: PropTypes.string,
  };

  async getWeatherFromApi(needToPush = false) {
    const { currentCity, getWeatherData, citiesList } = this.props;
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${currentCity},country&appid=${API_KEY}&units=metric`);
    const data = await apiCall.json();

    //Если ввести "Москва", то от API приходит "Moscow" и оно будет постоянно добавлять этот город.
    //Делаем проверку на город , который пришел от API и города из списка
    if (!needToPush) {
      getWeatherData(data, needToPush)
    } else if(needToPush && data.name) {
      const alreadyHaveCity = citiesList.find(city => city.name.toLowerCase() === data.name.toLowerCase());
      if (!alreadyHaveCity) {
        getWeatherData(data, needToPush)
      }
    }
  }

  handleSubmit(event) {
    const { currentCity, currentWeatherCity } = this.props;
    event.preventDefault();
    // Если у нас уже отображается информация по текущему в городу - не вызываем API
    if (currentWeatherCity !== currentCity) {
      this.getWeatherFromApi();
    }
  }

  getNewCity(event) {
    event.preventDefault();
    const { currentCity, citiesList } = this.props;
    const alreadyHaveCity = citiesList.find(city => city.name.toLowerCase() === currentCity.toLowerCase());
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
          <Tooltip
            contentMessage='Add to popular'
          >
            <AddButton
              handleAddNewCity={ (ev) => this.getNewCity(ev) }
              disabled={ !currentCity }
            />
          </Tooltip>
          <Submit
            disabled={ !currentCity }
            handleSubmit={ (ev) => this.handleSubmit(ev) }
          />
        </form>
      </div>
    );
  }
}
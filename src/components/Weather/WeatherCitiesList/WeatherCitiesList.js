import React, { Component } from 'react';

import './WeatherCitiesList.scss';

export default class WeatherCitiesList extends Component {

  getSelectedCity(city) {
    this.props.getSelectedCity(city);
  }

  removeSelectedCity(index) {
    const { citiesList, updatedCitiesList } = this.props;
    citiesList.splice(index, 1);
    updatedCitiesList(citiesList);
  }

  render() {
    const { citiesList } = this.props;
    return(
      <div className='citiesList'>
        <h3>
          Most popular cities
        </h3>
        {
          citiesList.map((city, index) => {
            return (
              <div key={ index } className='citiesList__city'>
                <span onClick={ () => this.getSelectedCity(city) }>
                  { city.name }
                </span>
                <div
                  onClick={ () => this.removeSelectedCity(index) }
                  className='citiesList__cancel'
                >
                  x
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
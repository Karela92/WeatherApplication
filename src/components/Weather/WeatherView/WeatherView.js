import React, { Component } from 'react';

import './WeatherView.scss';

export default class WeatherView extends Component {

  getErrorMessage() {
    return(
      <div className='container__weatherView--error'>
        City not found
      </div>
    )
  }

  render() {
    const { weatherInfo, error } = this.props;
    if (!weatherInfo) {
      return null;
    }
    return (
      <div className='container__weatherView'>
        {
          error ?
            this.getErrorMessage(error) :
            <div>
              <h3>
                { weatherInfo.name } :
              </h3>
              <p>
                { `Temperature: ${ Math.ceil(weatherInfo.main.temp) } °C` }
              </p>
              <p>
                { `Wind: ${ weatherInfo.wind.speed } m/s` }
              </p>
              <p>
                { `Humidity: ${ weatherInfo.main.humidity }%` }
              </p>
              <p>
                { `Pressure: ${ weatherInfo.main.pressure }hpa` }
              </p>
            </div>
        }
      </div>
    );
  }
}
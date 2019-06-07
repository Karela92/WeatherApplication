import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers'

import WeatherContainer from './components/Weather/WeatherContainer'
import Title from './components/Title/Title'

import './App.scss';

const store = createStore(rootReducer);

export default class App extends Component {

  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <Title />
          <WeatherContainer />
        </div>
      </Provider>
    );
  }
}

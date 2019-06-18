import React, { Component } from 'react';

import './FormInput.scss';

export default class FormInput extends Component {

  render() {
    const { placeHolder, handleInputChange, value } = this.props;
    return (
      <input
        type='text'
        placeholder={ placeHolder }
        value={ value }
        onChange={ handleInputChange }
      />
    );
  }
}

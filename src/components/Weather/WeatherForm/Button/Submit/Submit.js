import React, { Component } from 'react';

import './Submit.scss';

export default class Submit extends Component {

  static defaultProps = {
    disabled: false
  };

  render() {
    const { disabled, handleSubmit } = this.props;
    return (
      <button
        type='submit'
        onClick={ handleSubmit }
        disabled={ disabled }
      >
        Search
      </button>
    );
  }
}

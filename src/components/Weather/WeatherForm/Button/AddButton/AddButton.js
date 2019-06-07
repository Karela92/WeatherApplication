import React, { Component } from 'react';

// import './Submit.css';

export default class AddButton extends Component {

  static defaultProps = {
    disabled: false
  };

  render() {
    const { disabled, handleAddNewCity } = this.props;
    return (
      <button
        onClick={ handleAddNewCity }
        disabled={ disabled }
      >
        <span className='qq'> + </span>
      </button>
    );
  }
}
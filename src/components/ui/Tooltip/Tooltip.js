import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Tooltip.scss';

export default class Tooltip extends Component {

  static propTypes = {
    contentMessage: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="tooltip">
        { this.props.children }
        <div className="top">
          { this.props.contentMessage }
          <i></i>
        </div>
      </div>

    );
  }
}
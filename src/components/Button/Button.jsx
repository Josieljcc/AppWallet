import React from 'react';
import './button.css';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { children, handleClick, isDisabled } = this.props;
    return (
      <button
        type="button"
        disabled={ isDisabled }
        onClick={ handleClick }
        className="button"
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { children, type, name, value, handleInput, dataTestId } = this.props;
    return (
      <input
        className="inputs"
        data-testid={ dataTestId }
        type={ type }
        placeholder={ children }
        name={ name }
        value={ value }
        onChange={ handleInput }
      />
    );
  }
}

Inputs.defaultProps = {
  children: '',
};

Inputs.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default Inputs;

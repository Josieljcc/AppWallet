import React from 'react';
import PropTypes from 'prop-types';

class MethodSelect extends React.Component {
  render() {
    const { handleInput, method } = this.props;
    return (
      <select
        id="payment-method"
        data-testid="method-input"
        className="select"
        name="method"
        value={ method }
        onChange={ handleInput }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
    );
  }
}

MethodSelect.propTypes = {
  handleInput: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
};

export default MethodSelect;

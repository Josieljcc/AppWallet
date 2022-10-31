import React from 'react';
import PropTypes from 'prop-types';
import edit from '../../img/edit.png';
import remove from '../../img/remove.png';

class Expense extends React.Component {
  render() {
    const { expense:
        { description, method, tag, value, currency, exchangeRates } } = this.props;
    const { name, ask } = exchangeRates[currency];
    return (
      <tr>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ parseFloat(value).toFixed(2) }</td>
        <td>{name}</td>
        <td>{ parseFloat(ask).toFixed(2) }</td>
        <td>{ parseFloat(value * ask).toFixed(2) }</td>
        <td>Real</td>
        <td className="icons">
          <img src={ edit } alt="edit icon" />
          <img src={ remove } alt="remove icon" />
        </td>
      </tr>
    );
  }
}

Expense.propTypes = {
  expense: PropTypes.shape({
    description: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    value: PropTypes.string,
    currency: PropTypes.string,
    exchangeRates: PropTypes.shape([]),
  }).isRequired,
};

export default Expense;

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import edit from '../../img/edit.png';
import remove from '../../img/remove.png';
import './expense.css';
import { removeExpense } from '../../redux/actions/walletActions';

class Expense extends React.Component {
  handleRemove = () => {
    const { dispatch, expense: { id } } = this.props;
    dispatch(removeExpense(id));
  };

  render() {
    const { expense:
        { description, method, tag, value, currency, exchangeRates } } = this.props;
    const { name, ask } = exchangeRates[currency];
    return (
      <tr className="expense">
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ parseFloat(value).toFixed(2) }</td>
        <td>{name}</td>
        <td>{ parseFloat(ask).toFixed(2) }</td>
        <td>{ parseFloat(value * ask).toFixed(2) }</td>
        <td>Real</td>
        <td className="icons">
          <button
            type="button"
            data-testid="edit-btn"
            onClick={ this.handleRemove }
          >
            <img src={ edit } alt="edit icon" />
          </button>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ this.handleRemove }
          >
            <img
              src={ remove }
              alt="remove icon"
            />
          </button>
        </td>
      </tr>
    );
  }
}

Expense.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    value: PropTypes.string,
    currency: PropTypes.string,
    exchangeRates: PropTypes.shape([]),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Expense);

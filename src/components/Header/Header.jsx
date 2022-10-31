import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../img/logo.png';
import coin from '../../img/coin.png';
import user from '../../img/user.png';
import './header.css';

class Header extends React.Component {
  calculateTotal = () => {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, curr) => {
      acc += curr.value * curr.exchangeRates[curr.currency].ask;
      return acc;
    }, 0);
    return parseFloat(total).toFixed(2);
  };

  render() {
    const { email, expenses } = this.props;
    return (
      <header className="header">
        <img src={ logo } alt="logo" />
        <div className="expense">
          <img src={ coin } alt="coin icon" />
          <p data-testid="total-field">
            Total de despesas:
            {' '}
            { expenses[0].id === '' ? 0 : this.calculateTotal()}
            {' '}
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </div>
        <div className="user">
          <img src={ user } alt="user icon" />
          <p data-testid="email-field">{email}</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps)(Header);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Inputs from '../Inputs/Inputs';
import './walletForm.css';
import Button from '../Button/Button';
import { fetchCurrencies, saveExpense } from '../../redux/actions/walletActions';
import TagSelect from './TagSelect/TagSelect';
import MethodSelect from './MethodSelect/MethodSelect';

class WalletForm extends React.Component {
  state = {
    description: '',
    tag: 'Alimentação',
    method: 'Dinheiro',
    currency: 'USD',
    value: 0,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  formateExpense = async () => {
    const { expenses } = this.props;
    const { description, tag, method, currency, value } = this.state;
    const formatedExpense = {
      id: expenses[0].id === '' ? 0 : expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: await this.getExchangeRates(),
    };
    return formatedExpense;
  };

  getExchangeRates = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRate = await response.json();
    return exchangeRate;
  };

  handleClick = async () => {
    const { dispatch } = this.props;
    const formatedExpense = await this.formateExpense();
    dispatch(saveExpense(formatedExpense));
    this.setState({
      description: '',
      tag: 'Alimentação',
      method: 'Dinheiro',
      currency: 'USD',
      value: 0,
    });
  };

  handleInput = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { description, value, tag, currency, method } = this.state;
    const { currencies } = this.props;
    return (
      <>
        <div className="form">
          <form className="form-content">
            <div className="row">
              <p>Descição da despesa</p>
              <Inputs
                id="description"
                name="description"
                type="text"
                dataTestId="description-input"
                value={ description }
                handleInput={ this.handleInput }
              >
                Despesa
              </Inputs>
              <p>Descição da despesa</p>
              <TagSelect
                tag={ tag }
                handleInput={ this.handleInput }
              />
            </div>
            <div className="row">
              <p>Valor</p>
              <Inputs
                id="price"
                dataTestId="value-input"
                name="value"
                type="number"
                value={ value }
                handleInput={ this.handleInput }
              />
              <p>Método de pagamento</p>
              <MethodSelect handleInput={ this.handleInput } method={ method } />
              <p>Moeda</p>
              <select
                value={ currency }
                name="currency"
                onChange={ this.handleInput }
                id="currency"
                className="select"
              >
                {currencies.length && currencies
                  .map((atualCurrency) => (
                    <option
                      key={ atualCurrency }
                      value={ atualCurrency }
                    >
                      {atualCurrency}
                    </option>
                  ))}
              </select>
            </div>
          </form>
        </div>
        <div className="button-container">
          <Button
            handleClick={ this.handleClick }
            isDisabled={ false }
          >
            Adcionar Despesas

          </Button>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies, expenses, editor, idToEdit } }) => ({
  currencies,
  expenses,
  editor,
  idToEdit,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.shape([]).isRequired,
  expenses: PropTypes.shape([]).isRequired,
};

export default connect(mapStateToProps)(WalletForm);

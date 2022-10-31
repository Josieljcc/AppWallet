import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Expense from '../Expense/Expense';
import './table.css';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div className="table-container">
        <table className="darkTable">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses[0].id !== '' && expenses
              .map((expense) => <Expense key={ expense.id } expense={ expense } />)}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

Table.propTypes = {
  expenses: PropTypes.shape([]).isRequired,
};

export default connect(mapStateToProps)(Table);

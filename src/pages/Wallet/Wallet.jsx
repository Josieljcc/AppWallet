import React from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import Header from '../../components/Header/Header';
import bg from '../../img/login.png';
import './wallet.css';
import WalletForm from '../../components/WalletForm/WalletForm';
import Table from '../../components/Table/Table';

class Wallet extends React.Component {
  render() {
    const { editor } = this.props;
    return (
      <div className="main">
        <img className="bg-png" src={ bg } alt="background" />
        {editor && (
          <div className="modal">
            <WalletForm>Editar Despesa</WalletForm>
          </div>
        )}
        <div className="add">
          <Header />
          {!editor && <WalletForm>Adicionar Despesa</WalletForm>}
        </div>
        <div className="main-content">
          <div className="expense-table">
            <Table />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet: { editor, idToEdit } }) => ({
  editor,
  idToEdit,
});

Wallet.propTypes = {
  editor: PropType.bool.isRequired,
};

export default connect(mapStateToProps)(Wallet);

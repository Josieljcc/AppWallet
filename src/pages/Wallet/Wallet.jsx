import React from 'react';
import Header from '../../components/Header/Header';
import bg from '../../img/login.png';
import './wallet.css';
import WalletForm from '../../components/WalletForm/WalletForm';
import Table from '../../components/Table/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div className="main">
        <img className="bg-png" src={ bg } alt="background" />
        <div className="add">
          <Header />
          <WalletForm />
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

export default Wallet;

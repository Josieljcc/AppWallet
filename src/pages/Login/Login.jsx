import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../components/Button/Button';
import Inputs from '../../components/Inputs/Inputs';
import bg from '../../img/login.png';
import logo from '../../img/logo.png';
import './login.css';
import { addEmail } from '../../redux/actions/userActions';

class Login extends React.Component {
  state = {
    password: '',
    email: '',
    isDisabled: true,
  };

  isEmailValid = () => {
    const { email } = this.state;
    const regex = /[a-z0-9]+@[a-z0-9]+\.com/;
    return regex.test(email);
  };

  isPasswordValid = () => {
    const { password } = this.state;
    const minLength = 5;
    return password.length > minLength;
  };

  isFormValid = () => {
    if (this.isEmailValid() && this.isPasswordValid()) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  };

  handleInput = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    }, () => this.isFormValid());
  };

  handleClick = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(addEmail(email));
    history.push('/carteira');
  };

  render() {
    const { password, email, isDisabled } = this.state;
    return (
      <div className="login">
        <img className="bg-png" src={ bg } alt="background" />
        <div className="card">
          <img className="logo" src={ logo } alt="logo" />
          <Inputs
            name="email"
            type="text"
            dataTestId="email-input"
            value={ email }
            handleInput={ this.handleInput }
          >
            Email
          </Inputs>
          <Inputs
            type="password"
            name="password"
            dataTestId="password-input"
            value={ password }
            handleInput={ this.handleInput }
          >
            Senha
          </Inputs>
          <div className="sigin-button">
            <Button
              isDisabled={ isDisabled }
              handleClick={ this.handleClick }
            >
              Entrar

            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);

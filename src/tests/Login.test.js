import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testes da tela de Login', () => {
  test('se a aplicação começa no patch "/"', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
  test('se os componentes estão na tela', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByPlaceholderText('Email');
    expect(email).toBeInTheDocument();
    const password = screen.getByPlaceholderText('Senha');
    expect(password).toBeInTheDocument();
    const button = screen.getByRole('button', { name: /entrar/i });
    expect(button).toBeInTheDocument();
  });
  test('se o botão está desativado ao carregar a tela', () => {
    renderWithRouterAndRedux(<App />);
    const button = screen.getByRole('button', { name: /entrar/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('disabled');
  });
  test('se o botão ativa quando os dados são inseridos corretamente', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByPlaceholderText('Email');
    expect(email).toBeInTheDocument();
    const password = screen.getByPlaceholderText('Senha');
    expect(password).toBeInTheDocument();
    userEvent.type(email, 'josiel.jcc@hotmail.com');
    userEvent.type(password, '123456789');
    const button = screen.getByRole('button', { name: /entrar/i });
    expect(button).toBeInTheDocument();
    expect(button).not.toHaveAttribute('disabled');
  });
  test('se o botão permanece desativado os dados são inseridos estão errados', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByPlaceholderText('Email');
    expect(email).toBeInTheDocument();
    const password = screen.getByPlaceholderText('Senha');
    expect(password).toBeInTheDocument();
    userEvent.type(email, 'josiel.jcchotm.com');
    userEvent.type(password, '1234');
    const button = screen.getByRole('button', { name: /entrar/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('disabled');
  });
  test('se ao inserir os dados certos ao clickar no botão o usuário é redirecionado para /carteira', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const email = screen.getByPlaceholderText('Email');
    const password = screen.getByPlaceholderText('Senha');
    const button = screen.getByRole('button', { name: /entrar/i });
    userEvent.type(email, 'josiel.jcc@hotmail.com');
    userEvent.type(password, '123456789');
    userEvent.click(button);
    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });
});

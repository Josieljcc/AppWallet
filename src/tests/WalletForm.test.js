import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Wallet from '../pages/Wallet/Wallet';
import mockInitialState from './helpers/mockInitialState';
import { renderWithRouterAndRedux } from './helpers/renderWith';

// jest.spyOn('../redux/actions/walletActions', 'fetchCurrencies')

describe('testes do componente WalletForm', () => {
  test('se os componentes estão na tela', () => {
    renderWithRouterAndRedux(<Wallet />, { initialState: mockInitialState });
    const description = screen.getByPlaceholderText(/despesa/i);
    expect(description).toBeInTheDocument();
    const value = screen.getByDisplayValue('0');
    expect(value).toBeInTheDocument();
    const method = screen.getByDisplayValue(/Dinheiro/i);
    expect(method).toBeInTheDocument();
    const tag = screen.getByDisplayValue(/alimentação/i);
    expect(tag).toBeInTheDocument();
    const currency = screen.getByDisplayValue(/usd/i);
    expect(currency).toBeInTheDocument();
    const addButton = screen.getByRole('button', { name: /adicionar despesa/i });
    expect(addButton).toBeInTheDocument();
  });
  test('se ao adicionar uma despesa ela vai corretamente para o estado global', () => {
    const { store } = renderWithRouterAndRedux(
      <Wallet />,
    );
    const description = screen.getByPlaceholderText(/despesa/i);
    userEvent.type(description, 'teste');
    const button = screen.getByRole('button', { name: /adicionar despesa/i });
    userEvent.click(button);
    // const value = screen.getByDisplayValue('0');
    // userEvent.type(description, 'teste');
    // userEvent.type(value, 10);
    // expect(value).toHaveValue(10);
    // const addButton = screen.getByRole('button', { name: /adicionar despesa/i });
    // userEvent.click(addButton);
    console.log(store.getState().wallet.expenses);
    // expect(store).toBe('teste1');
  });
});

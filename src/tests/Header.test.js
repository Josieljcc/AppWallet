import { screen } from '@testing-library/react';
import Wallet from '../pages/Wallet/Wallet';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import mockInitialState from './helpers/mockInitialState';

describe('Testes do componente Header', () => {
  test('testa se os componentes aparecem corretamente na tela', () => {
    renderWithRouterAndRedux(<Wallet />, { initialState: mockInitialState });
    const email = screen.getByText(/total de despesas/i);
    expect(email).toBeInTheDocument();
  });
  test('se o email que está no estado global aparece no header', () => {
    renderWithRouterAndRedux(<Wallet />, { initialState: mockInitialState });
    const email = screen.getByText(/josiel.jcc@hotmail.com/i);
    expect(email).toBeInTheDocument();
  });
  test('se o valor aparece corretamente de acordo com os item do estdo global', () => {
    renderWithRouterAndRedux(<Wallet />, { initialState: mockInitialState });
    const total = screen.getByText(/1257.20/i);
    expect(total).toBeInTheDocument();
  });
});

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Wallet from '../pages/Wallet/Wallet';
import mockInitialState from './helpers/mockInitialState';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testa o componente Expense', () => {
  test('ao clikar em editar na despesa abre o formulário para edição', () => {
    renderWithRouterAndRedux(<Wallet />, { initialState: mockInitialState });
    const deleteTestId = 'delete-btn';
    const firstButtons = screen.getAllByTestId(deleteTestId);
    userEvent.click(firstButtons[0]);
    const afterButtons = screen.getAllByTestId(deleteTestId);
    expect(afterButtons.length).toBe(1);
    const secondButtons = screen.getAllByTestId(deleteTestId);
    userEvent.click(secondButtons[0]);
  });
});

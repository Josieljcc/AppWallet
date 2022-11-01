import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Wallet from '../pages/Wallet/Wallet';
import mockInitialState from './helpers/mockInitialState';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('testa o componente Wallet', () => {
  test('se ao clicar em editar aparece o modal com o botão editar despesa', () => {
    renderWithRouterAndRedux(<Wallet />, { initialState: mockInitialState });
    const editBtn = screen.getAllByTestId('edit-btn');
    userEvent.click(editBtn[0]);
    const editButtonForm = screen.getByRole('button', { name: /editar despesa/i });
    expect(editButtonForm).toBeInTheDocument();
  });
  test('se ao clicar em editar despesa a despesa é editada ', () => {
    renderWithRouterAndRedux(<Wallet />, { initialState: mockInitialState });
    const editBtn = screen.getAllByTestId('edit-btn');
    userEvent.click(editBtn[0]);
    const editButtonForm = screen.getByRole('button', { name: /editar despesa/i });
    const description = screen.getByTestId('description-input');
    userEvent.type(description, 'Edited');
    userEvent.click(editButtonForm);
    const editedDescription = screen.getByText('Edited');
    expect(editedDescription).toBeInTheDocument();
  });
});

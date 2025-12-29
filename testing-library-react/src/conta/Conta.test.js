import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Conta from './Conta';

describe('Account component', () => {
  it('should show the account value with monetary format', () => {
    render(<Conta saldo={1000} />)

    const accountValue = screen.getByTestId('saldo-conta')

    expect(accountValue.textContent).toBe('R$ 1000')
  })

  it('should call the function of make transaction when button is clicked', () => {
    const makeTransactionFn = jest.fn();

    render(<Conta saldo={1000} realizarTransacao={makeTransactionFn} />)

    fireEvent.click(screen.getByText('Realizar operação'))

    expect(makeTransactionFn).toHaveBeenCalled();
  })
})
import React from 'react';
import { fireEvent, render, screen }from "@testing-library/react";

import App, { calcularNovoSaldo } from './App';

describe('App', () => {
  it('should show the bank name', () => {
    render(<App />)
    expect(screen.getByText('ByteBank')).toBeInTheDocument()
  })

  it('should show the value', () => {
    render(<App />)
    expect(screen.getByText('Saldo:')).toBeInTheDocument()
  })

  describe('Transaction is done', () => {
    it('should withdrawn operation make the account value decrease', () => {
      const values = {
        transacao: 'saque',
        valor: 50
      }

      const value = calcularNovoSaldo(values, 150)

      expect(value).toBe(100)
    })
    it('when withdraw operation value is bigger the account value, account value should be negative', () => {
      const values = {
        transacao: 'saque',
        valor: 200
      }

      const value = calcularNovoSaldo(values, 150)

      expect(value).toBe(-50)
    })
    it('should deposit operation value add values on account value', () => {
      const values = {
        transacao: 'deposito',
        valor: 50
      }

      const value = calcularNovoSaldo(values, 150)

      expect(value).toBe(200)
    })
    it('should withdraw operation remove a value from account value when button clicks', () => {
      render(<App />)

      const accountValue = screen.getByText('R$ 1000')
      const transaction = screen.getByLabelText('Saque')
      const value = screen.getByTestId('valor')
      const transactionButton = screen.getByText('Realizar operação')

      expect(accountValue.textContent).toBe('R$ 1000')

      fireEvent.click(transaction, { target: { value: 'saque' }})

      fireEvent.change(value, { target: { value: '10' }})
      
      fireEvent.click(transactionButton)

      expect(accountValue.textContent).toBe('R$ 990')
    })
  })
})
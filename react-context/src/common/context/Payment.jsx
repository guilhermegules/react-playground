import { createContext, useContext, useState } from 'react'

export const PaymentContext = createContext()

PaymentContext.displayName = 'Payment'

export const PaymentProvider = ({ children }) => {
  const paymentTypes = [
    {
      name: 'Boleto',
      taxes: 1,
      id: 1,
    },
    {
      name: 'Cartão de crédito',
      taxes: 1.3,
      id: 2,
    },
    {
      name: 'PIX',
      taxes: 1,
      id: 3,
    },
    {
      name: 'Crediário',
      taxes: 1.5,
      id: 4,
    },
  ]

  const [paymentType, setPaymentType] = useState(paymentTypes[0])

  return (
    <PaymentContext.Provider
      value={{ paymentTypes, paymentType, setPaymentType }}
    >
      {children}
    </PaymentContext.Provider>
  )
}

export const usePaymentContext = () => {
  const { paymentType, paymentTypes, setPaymentType } =
    useContext(PaymentContext)

  function paymentTypeChange(id) {
    const payment = paymentTypes.find((item) => item.id === id)

    setPaymentType(payment)
  }

  return {
    paymentType,
    paymentTypes,
    paymentTypeChange,
  }
}

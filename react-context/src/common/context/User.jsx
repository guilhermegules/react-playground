import { createContext, useState } from 'react'

export const UserContext = createContext()

UserContext.displayName = 'User'

export const UserProvider = ({ children }) => {
  const [name, setName] = useState('')
  const [value, setValue] = useState(0)

  return (
    <UserContext.Provider value={{ name, setName, value, setValue }}>
      {children}
    </UserContext.Provider>
  )
}

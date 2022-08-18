import React, {createContext, useState} from 'react'

export const MyContext2 = React.createContext()

export const InputContext = ({ children }) => {
  const [value, setValue] = useState('')
  return (
    <MyContext2.Provider value={[value, setValue]}>
      {children}
    </MyContext2.Provider>
  );
}

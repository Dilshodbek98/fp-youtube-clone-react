import React, {createContext,useState} from 'react'

export const OpenContext = React.createContext()

export const OpenerContext = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <OpenContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </OpenContext.Provider>
  );
}

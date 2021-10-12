import React, { useState, createContext } from 'react'


export const UserContext = createContext()

export const PrimaryKeyContext = createContext()

export const StaffStatusContext = createContext()


export const UserProvider = (props) => {

  const [token, setToken] = useState('')
  const [pk, setPk] = useState(null)
  const [status, setStatus] = useState('')

  return (
    <UserContext.Provider value={[token, setToken]}>
      <StaffStatusContext.Provider value={[status, setStatus]}>
      <PrimaryKeyContext.Provider value={[pk, setPk]}>
        
          {props.children}
          </PrimaryKeyContext.Provider>
        </StaffStatusContext.Provider>
      
    </UserContext.Provider>
  );
}


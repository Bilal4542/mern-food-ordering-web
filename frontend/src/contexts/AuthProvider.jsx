import React, {createContext, useState} from 'react'



export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('biala')

    const authInfo = {
        user
    }

  return (
    <AuthContext.Provider value={authInfo}>
      
    </AuthContext.Provider>
  )
}

export default AuthProvider

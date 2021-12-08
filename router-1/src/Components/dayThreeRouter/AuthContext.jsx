import React from 'react'

export const AuthContext = React.createContext()

function AuthContextProvider({children}) {

    const [isAuth,setIsAuth] = React.useState(false)

    function handleAuth(){
        setIsAuth(!isAuth)
    }

    const variable = [isAuth,handleAuth]

    return (
        <AuthContext.Provider value={variable}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

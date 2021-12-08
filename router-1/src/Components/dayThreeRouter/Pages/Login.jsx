import React from 'react'
import { Redirect,useHistory } from 'react-router'
import {AuthContext} from '../AuthContext.jsx'

function Login() {
    const [isAuth,handleAuth] = React.useContext(AuthContext)
    const history = useHistory()
    function handleClick(){
        if (isAuth===false) {
            
            history.push("/dashboard")
            handleAuth();
        }else{
            history.push('/login')
            handleAuth();
        }
        
    }

    return (
        <div>
            Login Page
            <button onClick={handleClick}>{isAuth===false?"Login":"Logout"}</button>
        </div>
    )
}

export default Login

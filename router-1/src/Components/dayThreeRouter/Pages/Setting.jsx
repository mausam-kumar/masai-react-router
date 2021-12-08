import React from 'react'
import { Redirect,useHistory } from 'react-router'

import {AuthContext} from '../AuthContext.jsx'



function Setting() {

    const history = useHistory()

    const [isAuth,handleAuth] = React.useContext(AuthContext)
    return isAuth?(
        <div>
            setting Page
        </div>
    ):(
        <Redirect to={"/login"} />
        
    )
}

export default Setting

import React from 'react'
import {Link} from 'react-router-dom'
import { Redirect,useHistory } from 'react-router'
import styled from "styled-components"

import {AuthContext} from '../AuthContext.jsx'
function Welcome() {
    
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
        <Wrapper>
            welcome Page
            <Link to='/dashboard'>Dashboard</Link>
            <button onClick={handleClick}>{isAuth===false?"Login":"Logout"}</button>
        </Wrapper>
    )
}

export default Welcome


const Wrapper = styled.div`
    width:400px;
    display:flex;
    justify-content:space-between;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

`
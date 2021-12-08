import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

function Dashboard() {
    return (
        <Wrapper>
            Welcome to Dashboard
            <Link to='/dashboard/setting'>Setting</Link>
        </Wrapper>
    )
}

export default Dashboard

const Wrapper = styled.div`
    width:400px;
    display:flex;
    justify-content:space-between;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

`
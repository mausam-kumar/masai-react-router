import React from 'react'
import styled from 'styled-components'
import {Switch,Route} from 'react-router-dom'

import Products from './Products.jsx'
import CartDetails from './CartDetails.jsx'


function Router(){

    return(
        <Wrapper>   
            <Switch>

                <Route exact path="/">
                    <Products />
                </Route>
                <Route exact path="/carts">
                    <CartDetails />
                </Route>

            </Switch>

        </Wrapper>
    )
}

export default Router

const Wrapper = styled.div`

`
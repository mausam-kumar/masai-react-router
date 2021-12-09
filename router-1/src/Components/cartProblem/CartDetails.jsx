import React from 'react'
import CartProductCard from './CartProductCard.jsx'
import styled from 'styled-components'
import axios from 'axios'
import {Link} from 'react-router-dom'

function CartDetails() {
    const [state,setState] = React.useState([])
    const [amount,setAmount] = React.useState(0)
    const [refresh,setRefresh] = React.useState(false)

    function changeAmount(data){
        data.forEach((ele) => {
            setAmount((prev) => prev+ele.count*ele.price)
        })
    }

    async function fetchData(){
        const config = {
            url:'https://mausam-mock-json-server.herokuapp.com/cartitems',
            method:"get"
        }
        const data = await axios(config)
        changeAmount(data.data)
        setState(data.data)
    }
    
    React.useEffect(() => {
        (async () => {
            fetchData()
        })()
        
    },[refresh])

    function handleRefresh(){
        refresh===false?setRefresh(true):setRefresh(false)
    }


    return (
        <Wrapper>
            <Link to="/"><h2>HOME PAGE</h2></Link>
            {
                state.map((ele) => {
                    return(

                        <CartProductCard id={ele.id} key={ele.id} price={ele.price} image_url={ele.image_url} description={ele.description} product_name={ele.product_name} ele_count={ele.count} 
                        handleRefresh={handleRefresh}
                        />
                    )
                })
            }
            <div>
                <h3>Total Amount : {amount}</h3>
            </div>
        </Wrapper>
    )
}

export default CartDetails


const Wrapper = styled.div`
    

`
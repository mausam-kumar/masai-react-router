import React from 'react'
import ProductCard from './ProductCard.jsx'
import styled from 'styled-components'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Products() {
    const [state,setState] = React.useState([])

    async function fetchData(){
        const config = {
            url:'https://mausam-mock-json-server.herokuapp.com/products',
            method:"get"
        }
        const data = await axios(config)
        setState(data.data)
    }

    React.useEffect(() => {
        fetchData()
    },[])
    return (
        <Wrapper>
            <Link to="/carts"><h2>GO TO CARTS</h2></Link>
            {
                state.map((ele) => {
                    return(

                        <ProductCard id={ele.id} key={ele.id} price={ele.price} image_url={ele.image_url} description={ele.description} product_name={ele.product_name} />
                    )
                })
            }
        </Wrapper>
    )
}

export default Products


const Wrapper = styled.div`
    

`
import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import axios from 'axios'


function CartProductCard({id,product_name,description,price,image_url,ele_count,handleRefresh}) {

    const [count,setCount] = React.useState(ele_count)

    async function handleClick(id){
        const config = {
            url:`https://mausam-mock-json-server.herokuapp.com/cartitems/${id}`,
            method: 'delete'
        }
        await axios(config)
        handleRefresh()
        alert(`Item removed from cart`)
    }

    return (
        <Wrapper>

            <LeftContainer>
                <figure>
                    <img src={image_url} alt={product_name} />
                </figure>
            </LeftContainer>
            <RightContainer>
                <p>{product_name}</p>
                <p>{description}</p>
                <p>₹{price}</p>
                <div>
                    {/* <Button 
                    sx={{margin:"10px",background:"red"}}
                    onClick={() => handleStateChange("remove")}
                    variant="contained"><RemoveIcon /></Button> */}
                    Item Count : {ele_count}
                    {/* <Button 
                    sx={{margin:"10px",background:"green"}} 
                    onClick={() => handleStateChange("add")}
                    variant="contained"><AddIcon /></Button> */}
                </div>
                <Button sx={{background:"crimson",margin:"10px"}} onClick={() => handleClick(id)} variant="contained">Remove</Button>
            </RightContainer>

        </Wrapper>
    )
}

export default CartProductCard

const Wrapper = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width:700px;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    padding: 25px;
    margin: 10px;
    `
const LeftContainer = styled.div`
    margin-right:20px;
    
    `
const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-weight: 400;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
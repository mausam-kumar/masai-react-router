import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import axios from 'axios'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


function ProductCard({id,product_name,description,price,image_url}) {

    const [count,setCount] = React.useState(0)

    async function handleClick(id){
        if(count===0){
            return
        }
        const config = {
            url:`http://localhost:3001/products/${id}`,
            method: 'GET'
        }
        let fetchedData
        try {
            fetchedData = await axios(config)
        } catch (error) {
            console.log(error);
        }

        const updateConfig = {
            url:`http://localhost:3001/cartitems/${id}`,
            method:'get'
        }

        try {
            const newData = await axios(updateConfig)
            const newConfig = {
                url:`http://localhost:3001/cartitems/${id}`,
                method: 'PATCH',
                data:{count:newData.data.count+count}
            }
            await axios(newConfig)
        } catch (error) {
            // console.log(error);
            const newConfig = {
                url:`http://localhost:3001/cartitems`,
                method: 'POST',
                data:{...fetchedData.data,count:count}
            }
            try{
                await axios(newConfig)
                alert(`Item added to cart`)
            }catch(error){
                console.log(error);
            }
        }

    }

    function handleStateChange(value){
        if (value==="add") {
            setCount(prev => prev+1)
        }else if(value==="remove"){
            setCount((prev) => prev===0?0:prev-1)
        }else{
            return
        }
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
                    <Button 
                    sx={{margin:"10px",background:"red"}}
                    onClick={() => handleStateChange("remove")}
                    variant="contained"><RemoveIcon /></Button>
                    {count}
                    <Button 
                    sx={{margin:"10px",background:"green"}} 
                    onClick={() => handleStateChange("add")}
                    variant="contained"><AddIcon /></Button>
                </div>
                <Button onClick={() => handleClick(id)} variant="contained">Add TO CART</Button>
            </RightContainer>

        </Wrapper>
    )
}

export default ProductCard

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
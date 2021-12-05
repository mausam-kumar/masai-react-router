import React from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function ProductDetails() {

    const {id} = useParams()

    const [ele,setEle] = React.useState({
        name:"",
        price:"",
        id:""
    })

    async function fetchData(){
        console.log("id => ",id);
        const config = {
            url:`http://localhost:3000/products/${id}`,
            method: 'GET'
        }

        const newData = await axios(config)
        setEle({...newData.data})
    }

    React.useEffect(() => {
        fetchData()
    },[])

    return (
        <div>
            <h1>{ele.name}</h1>
            <h1>{ele.price}</h1>
            <h1>{ele.id}</h1>
        </div>
    )
}

export default ProductDetails

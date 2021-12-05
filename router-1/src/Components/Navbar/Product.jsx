import React from 'react'
import axios from 'axios'
import {useParams,Link} from 'react-router-dom'

function Product() {
    const [state,setState] = React.useState([])

    const id = useParams()

    async function fetchData(){
        console.log("Product id",id);
        const config = {
            url:`http://localhost:3000/products`,
            method: 'GET'
        }
        const newData = await axios(config)
        setState([...newData.data])
    }

    React.useEffect(() => {
        
        fetchData()

        
    }, [])
    return (
        <div>
            {
                state.map((ele) => {
                    return(
                        <div>
                            <h2 key={ele.id}>{ele.name}</h2>

                            <Link to={`/productdetail/${ele.id}`}>Show Details</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Product

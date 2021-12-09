import React from 'react'
import axios from 'axios'

function Landing() {
    const url = process.env.REACT_APP_URL
    const [state,setState] = React.useState([])

    async function fetchData(url){
        const config = {
            url: url,
            method: 'GET'
        }

        const data = await axios(config)
        setState(data.data.categories)
        console.log(data.data.categories);
    }

    React.useEffect(() =>{
        fetchData(url)
    },[])


    return (
        <div>
            {
                state.map((ele) => {
                    return (
                        <h2>{ele.strCategory}</h2>
                    )
                })
            }
        </div>
    )
}

export default Landing

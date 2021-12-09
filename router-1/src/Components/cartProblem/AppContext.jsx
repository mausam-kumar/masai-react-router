import React from 'react'

export const CartContext = React.createContext()


function AppContext({children}) {

    const [cartCount,setCartCount] = React.useState(0)

    function handleCartChange(event){
        if (event==="Increase") {
            setCartCount((prev) => prev+1)
        }else if(event==="Decrease"){
            setCartCount((prev) => prev-1)
        }else{
            return
        }
    }

    const variable = [cartCount,handleCartChange]

    return (
        <CartContext.Provider value={variable}>
            {children}
        </CartContext.Provider>
    )
}

export default AppContext

import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App.js"
import AuthContextProvider from './Components/dayThreeRouter/AuthContext.jsx'
import AppContext from "./Components/cartProblem/AppContext.jsx"

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <AppContext>
                <App />
            </AppContext>
        </AuthContextProvider>
    </React.StrictMode>,
document.getElementById('root'))

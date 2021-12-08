import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App.js"
import AuthContextProvider from './Components/dayThreeRouter/AuthContext.jsx'

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </React.StrictMode>,
document.getElementById('root'))

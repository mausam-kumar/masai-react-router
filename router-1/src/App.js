import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Navbar/index.jsx'
import Routes from './Components/dayThreeRouter/Pages/Routes.jsx'


function App() {
  return (
   <BrowserRouter>
      {/* <Navbar /> */}
      <Routes />
   </BrowserRouter>
  )
}

export default App
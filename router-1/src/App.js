import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Navbar/index.jsx'
// import Routes from './Components/dayThreeRouter/Pages/Routes.jsx'
import Router from './Components/cartProblem/Router.jsx'
import Landing from './Components/envVariable/Landing.jsx'

function App() {
  return (
   <BrowserRouter>
      {/* <Navbar /> */}
      {/* <Routes /> */}
      {/* <Router /> */}
      <Landing />
   </BrowserRouter>
  )
}

export default App
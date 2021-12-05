import React from "react";
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import About from "./About.jsx";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import Login from "./Login.jsx";
import Services from "./Services.jsx";
import Product from "./Product.jsx";
import ProductDetails from "./ProductDetails.jsx";

function NavBar() {
  return (
    <>
		<div>
			<Link style={{marginRight:"15px"}} to="/">Home</Link>
			{
			/* <Link to="/contact">Contact</Link>
			<Link to="/about-us">About</Link>
			<Link to="/services">Services</Link>
			<Link to="/login">Login</Link> */
			}
			<Link to="/product">Product</Link>
			
		</div>
      {/* <Router> */}
        <Switch>
			<Route exact path="/">
				<Home />
			</Route>
			{/* <Route path="/about-us">
				<About />
			</Route>
			<Route path="/contact">
				<Contact />
			</Route>
			<Route path="/login">
				<Login />
			</Route>
			<Route path="/services">
				<Services />
			</Route> */}
			<Route path="/product">
				<Product />
			</Route>
			<Route path="/productdetail/:id">
				<ProductDetails />
			</Route>
		</Switch>
      {/* </Router> */}
    </>
  );
}

export default NavBar;

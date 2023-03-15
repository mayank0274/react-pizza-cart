import {Link} from "react-router-dom";
import { useContext } from "react";
import { CartContext} from "../context/CartContext";

const Navbar = ()=>{
  
  let { cart } = useContext(CartContext);

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <Link  className="navbar-brand" to="/"><img src="/images/logo.png" className="w-75" alt="pizza_logo"/></Link>
 
          <Link  className="nav-link" to="/cart" style={{marginLeft:"auto"}}>
        <button type="button" className="btn position-relative" style={{backgroundColor:"#F59E0D",borderRadius:"15px"}}>
    <img src="/images/cart.png" style={{width:"80%"}} alt="cart-img" />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-white">
    { cart.totalItems ? cart.totalItems : 0}
  </span>
</button>
        </Link>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link  className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link" to="/products">Products</Link>
      </li>
    </ul>
  </div>
</nav>
    );
}
export default Navbar;
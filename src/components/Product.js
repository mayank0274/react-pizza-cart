import { Link } from "react-router-dom";
import { useContext } from "react"
import { CartContext } from "../context/CartContext";

const Product = (props)=>{
  const { cart,setCart } = useContext(CartContext);
 
   const addToCart = (event,pizza)=>{
   event.preventDefault();
   console.log(pizza)
  
   let _cart = {...cart};

    if(!_cart.items){
      _cart = {items : {}};
    }
    if(_cart.items[pizza._id]){
      _cart.items[pizza._id] += 1
    }else{
_cart.items[pizza._id] = 1
    }
    
    if(!_cart.totalItems){
      _cart.totalItems = 0;
    }
    
    _cart.totalItems += 1;
    console.log(_cart);
    setCart(_cart);
    
}
  
  const { pizza } = props;
  const linkStyle = {
    textDecoration:"none",
    color:"#000",
  }
   return(
     <Link to={`/products/${pizza._id}`} style={linkStyle}>
    <div className="card my-2 mx-2" style={{width: "18rem"}}>
  <img src={pizza.image} className="card-img-top h-25" alt="pizza" />
  <div className="card-body">
    <h5 className="card-title">{ pizza.name }</h5>
    <div className="d-flex justify-content-around align-items-center">
    <h5 className="card-title"> ₹ { pizza.price } </h5>
    <h6 className="card-subtitle mb-2 text-muted"> { pizza.size } </h6>
   </div>
<button type="button" className="btn text-white" style={{backgroundColor:"#F59E0D"}} onClick={(event)=>{addToCart(event,pizza)}}>Add to cart</button>
  </div>
</div>
</Link>
    );
}

export default Product;
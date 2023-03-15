import { CartContext } from "../context/CartContext";
import { useContext} from "react";

const CartItem = (props)=>{
  
  const { item,quantity , updateCart, cartItemList } = props;
  const { cart , setCart } = useContext(CartContext);
  
  const incrementQty = (pizzaId)=>{
  const existingQty = cart.items[pizzaId];
  
  const myCart = {...cart};
  myCart.items[pizzaId] = existingQty + 1;
  myCart.totalItems += 1;
  setCart(myCart);
  }
  
  const decrementQty = (pizzaId)=>{
  const existingQty = cart.items[pizzaId];
  if(existingQty === 1){
    return;
  }
  
  const myCart = {...cart};
  myCart.items[pizzaId] = existingQty-1;
  myCart.totalItems -= 1;
  setCart(myCart);
  }
  
  const deleteItem = (pizzaId)=>{
  const myCart = {...cart};
  const itemQty = myCart.items[pizzaId];
  delete myCart.items[pizzaId];
  myCart.totalItems -= itemQty;
  setCart(myCart);
  const updatedCartList = cartItemList.filter((pizza) =>  pizza._id !== pizzaId);
  updateCart(updatedCartList);
  }
  
  return(
    <div className="card individualCartCard h-50 my-2 mx-2" style={{width: "18rem"}}>
  <img src={item.image} className="card-img-top w-50 cartImg mx-auto py-2" alt="pizza_img" />
  <div className="card-body text-center">
    <p className="card-text cartTitle"> {item.name} </p>
  <h6 className="card-subtitle Cartprice mb-2 text-muted"> ₹ {item.price * quantity} </h6>
  
<div className="d-flex justify-content-around align-items-center">
 <img src="/images/decrement.svg" alt="decrementBtn" style={{width:"10%"}} onClick={()=>{ decrementQty(item._id) }}/>
 <span id="quantity" className="text-center border border-dark d-block" style={{width:"30%"}}> {quantity} </span>
<img src="/images/increment.svg" alt="IncrementBtn" style={{width:"12.5%"}}  onClick={()=>{ incrementQty(item._id) }}/>
 <img src="/images/trash.svg" alt="delete_item" style={{width:"12.5%"}}  onClick={()=>{deleteItem(item._id)}}/>
 </div>
 </div>
  </div>
    );
}

export default CartItem;

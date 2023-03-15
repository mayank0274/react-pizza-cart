import CartItem from "../components/CartItem";
import { CartContext } from "../context/CartContext";
import { useContext, useState, useEffect } from "react";
import Spinner from "../components/Spinner"

const Cart = ()=>{
  
  const [cartDetail,setCartDetail] = useState([]);
  const [fetchData,isFetchData] = useState(false);
  
  
  const sendReq = async (body)=>{
    try{
      const pizzaData = await fetch("https://star-spark-pasta.glitch.me/api/products/cart-items",
      {
        method : "POST",
        headers : {
        "Content-Type":"application/json",
        },
        body : JSON.stringify({ids : body}),
      });
      const jsonData = await pizzaData.json();
      setCartDetail(jsonData);
      isFetchData(true);
    }catch(err){
      alert(err);
    } 
  }
  
  const { cart, setCart}= useContext(CartContext);
 
  useEffect(()=>{
    if(!cart.items || fetchData){
      isFetchData(true);
      return;
    }
 
  sendReq(Object.keys(cart.items));
  },[cart,fetchData])
 
 const getQty = (id)=>{
   return cart.items[id];
 }
 
 const getTotalPrice = ()=>{
   let totalPrice = 0;
   cartDetail.forEach((item)=>{
     totalPrice += (item.price * getQty(item._id));
   })
     return totalPrice;
 }
 
 const placrOrder = ()=>{
   window.alert("Order placed successfully");
   setCart([]);
   setCartDetail([]);
   }
 

  return(
    (!fetchData) ? <Spinner infoMsg="Cart items"/>
    :
    !cartDetail.length ? 
    <div className="d-flex justify-content-center align-items-center" style={{height:"60vh"}}>
    <h3>No items in cart!! </h3>
    </div>
    :
    <>
    <div className="container mx-auto my-3 d-flex justify-content-center align-items-center flex-wrap" style={{width:"90%"}}>
     { 
       cartDetail.map((item)=>{
        return <CartItem key={item._id} item={item} quantity={getQty(item._id)} updateCart={setCartDetail} cartItemList={cartDetail}/>
       })
      
     }
    </div>
       <div className="card text-right my-2 mx-auto" style={{width: "18rem",border:"none"}}>
  <div className="card-body">
    <h5 className="card-title">Total price : ₹ { getTotalPrice() }  </h5>
   { /* eslint-disable-next-line */}
        <a role="button" className="btn text-white d-block mx-auto my-2" style={{backgroundColor:"#F59E0D",borderRadius:"50px", width:"50%",float:"right"}} onClick={()=>{placrOrder()}}>Order now</a>
  </div>
</div>

</>
    );
}

export default Cart;
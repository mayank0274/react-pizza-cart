 /* root component */
 import {BrowserRouter as Router , Routes , Route } from "react-router-dom";
 import Navbar from "./components/Navbar";
 import Home from "./pages/Home";
 import ProductsPage from "./pages/ProductsPage";
 import SinglePizza from "./pages/SinglePizza";
 import Cart from "./pages/Cart";
 import { CartContext } from "./context/CartContext";
 import { useEffect,useState } from "react"
 
 
 const App = ()=>{
   
   const [cart, setCart] = useState([]);
   
   // get data from local storage when page refresh
   useEffect(()=>{
     const cart = window.localStorage.getItem("cart");
     setCart(JSON.parse(cart));
   },[])
   
   // update data when cart changes
   useEffect(()=>{
     window.localStorage.setItem("cart",JSON.stringify(cart));
   },[cart])
   
  return(
    <>
    <Router>
    <CartContext.Provider value={ {cart,setCart }}>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<ProductsPage/>} />
    <Route path="/products/:id" element={<SinglePizza/>} />
    <Route path="/cart" element={<Cart/>} />
    </Routes>
    </CartContext.Provider>
    </Router>
    </>
    );
}

export default App;
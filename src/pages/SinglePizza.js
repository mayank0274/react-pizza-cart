import { useParams , useNavigate} from "react-router-dom";
import { useState,useEffect } from "react"

const SinglePizza = ()=>{
  
  const params = useParams();
  const navigate = useNavigate();
  const [pizza,setPizza] = useState([]);
  useEffect(()=>{
   const fetchPizzaData = async ()=>{
    try{
      const pizzaData = await fetch(`https://star-spark-pasta.glitch.me/api/products/${params.id}`);
      const jsonData = await pizzaData.json();
       setPizza(jsonData);
    }catch(err){
      alert(err);
    } 
   }
     fetchPizzaData();
  },[params.id]);
  
  const backBtnStyle = {
    outline:"none",
    border:"none",
    background:"none",
  };
  
  return(
    <div className="container my-3 mx-auto d-block" style={{width:"90%"}}>
       <button className="link-dark" onClick={()=> navigate(-1)} style={backBtnStyle}>
       <span style={{fontSize:"30px",fontWeight:"bold"}}>&larr;</span>
       Back</button>
        <div className="card my-2" style={{width: "18rem"}}>
  <img src={pizza.image} className="card-img-top h-25" alt="pizza" />
  <div className="card-body">
    <h5 className="card-title">{ pizza.name }</h5>
    <div className="d-flex justify-content-around align-items-center">
    <h5 className="card-title"> ₹ { pizza.price } </h5>
    <h6 className="card-subtitle mb-2 text-muted"> { pizza.size } </h6>
   </div>
  </div>
</div>
</div>
    );
}

export default SinglePizza;
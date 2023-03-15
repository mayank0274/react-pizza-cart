import ProductList from "../components/ProductList";


const Home = ()=>{
  return(
    <>
    <div className="container my-3 d-flex flex-column flex-lg-row justify-content-center align-items-center heroSec">
    <div className="myHeading w-100">
    <h4 className="text-center"><i className="font-weight-bold">Are you hungry ? </i>  <span className="py-2 d-block"> Best pizzas in town , Don't wait </span></h4>
    <a href="#pizzaProduct" role="button" className="btn text-white d-block mx-auto my-2" style={{backgroundColor:"#F59E0D",borderRadius:"50px", width:"50%"}}>Order now</a>
    </div>
    <div className="heroSecImg w-100 my-2
    mx-auto">
   <img src="/images/pizza.png" alt="pizza" className="w-75 mx-auto d-block"/>
    </div>
    </div>
    
    <ProductList />
    </>
    );
}

export default Home;
import SearchInput from "../components/SearchInput";
import { useParams,useNavigate } from "react-router-dom";


const Products = () => {
 const {id} =useParams()
 console.log(id)
 const navigate =useNavigate()
  return <div className="mt-5">
  <SearchInput/>
  <button onClick={()=>{navigate(id)}}>tikla</button>
  </div>;
};

export default Products;

import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <div className="header">

            <Link to="/"><span className="hover:text-blue-600">Products</span></Link>
            <Link to="/cart"><span className="hover:text-blue-600 text-bold">View Cart</span></Link>
               
        </div>
    );
}

export default Header;
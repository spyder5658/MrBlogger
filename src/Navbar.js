import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>Mr.Blogger</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color :"white",
                    backgroundColor :"red",
                    borderRadius:'8px'
                }}>Add Blog</Link>
            </div>

        </div>
     );
}
 
export default Navbar;
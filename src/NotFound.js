import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    const history=useHistory()
    useEffect(()=>{
        setTimeout(()=>{
            history.push('/')
        },3000)
    })
    return ( 
        <div className="not-found">
            <h2>Sorry...</h2>
            <p>This page cannot be found</p>
        </div>
     );
}
 
export default NotFound;
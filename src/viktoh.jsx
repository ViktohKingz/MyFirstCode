import React,{useState} from "react";
//import { Links } from "react-router";
import { Link } from "react-router";
function MyComponent(){
    const[ name, setName] = useState();
   
return(
    <div>
        <p>Name: {name}</p>
        <Link to="/Welcome">
        <button >Go to my welcome page!</button>
        </Link>
    </div>
)
}
export default MyComponent;

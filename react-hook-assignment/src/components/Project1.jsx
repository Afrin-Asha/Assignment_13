import { useState } from "react";
import Menu from "../components/Menu";
const Project = () => {
  
    let [number,setNumber]=useState(0)  
    return (
      <div>
        <Menu />
        <h1>Button Clicked :{number}</h1>
        <button onClick={()=>setNumber(number+1)} >Click</button>
      </div>
    );
};


export default Project;
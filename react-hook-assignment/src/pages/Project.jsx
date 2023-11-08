import Menu from "../components/Menu";
import Project1 from './../components/Project1';
import Project2 from './../components/Project2';
import Project3 from './../components/Project3';
import Project4 from './../components/Project4';

import { useState } from "react";
const Project = () => {
  
    let [number,setNumber]=useState(0)  
    return (
      <div>
        <Menu />
        <Project1/>
        <Project2/>
        <Project3/>
        <Project4/>
        <h1>Button Clicked :{number}</h1>
        <button onClick={()=>setNumber(number+1)} >Click</button>
      </div>
    );
};


export default Project;
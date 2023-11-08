import Menu from "../components/Menu";
import { useRef } from "react";


const Home1 = () => {

        let headings =useRef();
        let myImg =useRef();
            
        const change = ()=>{
        headings.current.innerText='Welcome Home'; 
        myImg.current.src="https://placehold.co/600x400?text=Hello+World"
        myImg.current.setAttribute('width','1000px')
        myImg.current.setAttribute('height','500px')
        // myImg.current.setAttribute('margin-left','100px')
        }

        return (
        <div>
            <Menu/>
            
            <h1 ref={headings}></h1>
            <button onClick={change}>Click</button>
            <img ref={myImg} src=""  />
           
        </div>
        );
        };

export default Home1;

import Home1 from "../components/Home1";
import Home2 from "../components/Home2";
import Home3 from "../components/Home3";
import Home4 from "../components/Home4";



import Menu from "../components/Menu";
// import { useRef } from "react";


const Home = () => {

        // let headings =useRef();
        // let myImg =useRef();
            
        // const change = ()=>{
        // headings.current.innerText='Welcome Home'; 
        // myImg.current.src="https://placehold.co/600x400?text=Hello+World"
        // myImg.current.setAttribute('width','1000px')
        // myImg.current.setAttribute('height','500px')
        // // myImg.current.setAttribute('margin-left','100px')
        // }

        return (
        <div>
            <Menu/>
            <Home1/>
            <Home2/>
            <Home3/>
            <Home4/>
            {/* <h1 ref={headings}></h1>
            <button onClick={change}>Click</button>
            <img ref={myImg} src=""  /> */}
           
        </div>
        );
        };
export default Home;
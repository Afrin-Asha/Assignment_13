
// const About1 = () => {
//     return (
//         <div>
//             <h1>This is About 1 page</h1>
//         </div>
//     );
// };
import { useRef } from "react";  
  const About1 = () => {
    let myheadlines=useRef()
    const change = ()=>{
      myheadlines.current.classList.remove('text-success');
      myheadlines.current.classList.add('text-danger');
    }
      return (
        <div>
          <h1 className="text-success" ref ={myheadlines}>Hello From About 1 Page</h1>
          <button onClick={change}>Click</button>
        </div>
      );
  };



export default About1;
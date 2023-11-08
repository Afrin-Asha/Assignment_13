import Menu from "../components/Menu";
import { useState } from "react";
const Blog1 = () => {
 
    const [list,setList]=useState([]) ;
    const [item,setItem]=useState('')  ;
    const AddToList=()=>{
      list.push(item)
      setList([...list]);
    }
    const RemoveItem= (index)=>{
      alert(index)
      list.splice(index,1)
      setList([...list])
    }
    
      return (
        <div>
          <Menu />
          <h1>Blog</h1>
          <table>
            <tbody>
              {
                list.length!==0?

                (list.map((element,index)=>{
                      return (
                        <tr>
                        <td>{element}</td>
                       <td><button onClick={()=>{RemoveItem(index)}}>Remove</button></td>
                       </tr>)
                  })
                ):(<tr></tr>)

              }
            </tbody>

          </table>
          
          <input onChange={(e)=>setItem(e.target.value)} placeholder="Write Somthing Here" />
          <button onClick={AddToList}>Add</button>
        </div>
      );
  };

export default Blog1;
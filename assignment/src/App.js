import React from "react";
import { useState } from "react";

function App() {
  // const UseStateObject = ()=>{
  //   const [myObject, setMyObject ] = useState({
  //     Argument :"", 
  //   })
  // }

  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // });

  
  
  return (
    <div className="App">
    <h1>AdMyBrand Assignment</h1>

    <input />
    <select>
    <option>false</option>
    <option>true</option>
    </select>

    <div style={{"padding":"10px"}}>
    <button  >+Add Arg</button>
    </div>

    <div  style={{"padding":"10px"}}>
    <select>
    <option>select</option>
    <option>Constant</option>
    <option>Argument</option>
    <option>And</option>
    <option>Or</option>
    </select>

    <button >X</button>

    </div>


    <div style={{"padding":"20px"}}>
    <p>result :</p>

    </div>


    </div>
  );
}

export default App;

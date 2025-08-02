"use client"
import { useState } from "react";


export  function Counter() {
    const [count, setcount] = useState(0);
    return (
        <div>
          <h1>Count:{count}</h1>
          <button onClick={()=>{setcount(prew=>prew+1)}} >Increment</button>
        </div>
    );
}

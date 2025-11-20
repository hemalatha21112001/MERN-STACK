import React from 'react';
import {useState} from "react";
const Counter=()=>{
    let [count, setCount]=useState(0);
    return(
        <div>
            <h1>states</h1>
            <p>{count}</p>
            <button onClick={()=>setCount((prev)=>prev+1)}>click</button>
            </div>
        
    );
}

export default Counter;

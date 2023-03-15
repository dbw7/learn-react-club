import React, { useRef, useState } from "react";
import "./FormHolder.css"

const FormHolder = () => {
    const [counter, setCounter] = useState(0);
    const [multipier, setMultiplier] = useState(1);
    
    const multipierRef = useRef();
    
    const buttonHandler = () =>{
        setCounter(counter + 1);
    }
    
    const multiplierHandler = () =>{
        console.log(multipierRef.current.value);
    }
    
    
    return(
        <div className="form-holder">
            <h1>This is a form</h1>
            <h2>Counter: {counter}</h2>
            <h3>Multipier: {multipier}</h3>
            <input type="number" ref={multipierRef}></input>
            <button onClick={multiplierHandler}>Submit</button>
            <button onClick={buttonHandler}>Increment</button>
        </div>
    )
    
}

export default FormHolder
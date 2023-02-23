import React, { useState } from "react";
import "./FormHolder.css"

const FormHolder = () => {
    const [counter, setCounter] = useState(0);
    
    const buttonHandler = () =>{
        setCounter(counter + 1);
    }
    
    return(
        <div className="form-holder">
            <h1>This is a form</h1>
            <h2>Counter: {counter}</h2>
            <input></input>
            <button onClick={buttonHandler}>Submit</button>
        </div>
    )
    
}

export default FormHolder
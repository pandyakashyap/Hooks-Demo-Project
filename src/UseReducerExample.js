import React from 'react';
import { useReducer } from 'react';

const defaultValue = 0;

const reducer = (state, action) => {
    if(action.type === "Increment")
        return state+1;
    else if(action.type === "Decrement")
        return state-1;
}

const useReducerExample = () => {
   
    const [state, dispatch] =  useReducer(reducer, defaultValue);
    return (
       <div>
            <p>{state}</p>
            <h2> UseReducer </h2>
            <button onClick ={()=> dispatch({type : "Increment"})}>Increment</button>
            <button onClick ={()=> dispatch({type : "Decrement"})}>Decrement</button>
           
       </div> 
    )
}
export default useReducerExample;
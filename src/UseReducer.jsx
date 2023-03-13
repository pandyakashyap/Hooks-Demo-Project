import React from "react";
import {useReducer} from 'react';

const initialstatevalue = 0;

const reducer = (state,action) =>
{
       // console.log(state,action); => show on colsole value and it's type ,
        if(action.type === "Increment")
        {
            return state + 1;
        }
        if(action.type === "Decrement")
        {
            return state - 1;
        }
}

function UseReducer()
{
    
    const [state,dispatch] = useReducer(reducer,initialstatevalue);

    return(
        <>
            <h1> {state} </h1>
            <button onClick={() => dispatch({type:"Increment"})}> Increment </button>
            <button onClick={() => dispatch({type:"Decrement"})}> Decrement </button>

        </>
    )
}

export default UseReducer;
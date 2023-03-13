import React from "react";
import { useState } from "react";
import UseCustomHooks from "./UseCustomHooks";
//import { useEffect } from "react";

function UseStat()
{
    //1st button :-
    const [currentvalue , updatevalue ] = useState(0);
   
    //2nd button :-
    const [currval , updaval ] = useState(0);


    //Use Effect State Demo :-
    // useEffect(() => {
       
    //     if(currentvalue > 1)
    //     {
    //         document.title = `Chats (${currentvalue})`
    //     }
    //     else{
    //         document.title = `chats`;
    //     }
    // })

    
    //Custom Hooks :-
    UseCustomHooks(currentvalue);
   

    function increment()
    {
            updatevalue(currentvalue + 1);
    }

    function incre()
    {
        updaval(currval + 5);   
    }

    return(
        <>
            <h1> {currentvalue} </h1> 
            <button onClick={increment}> Click Me </button>

            <h1> { currval } </h1>
            <button onClick={incre}>Click Once Again </button>
        </>
    )
}
export  default UseStat;
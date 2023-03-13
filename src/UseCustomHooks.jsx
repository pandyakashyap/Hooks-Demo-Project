import React from "react";
import { useEffect } from "react";

function UseCustomHooks (currentvalue)
{
    useEffect(() => {
       
        if(currentvalue > 1)
        {
            document.title = `Chats (${currentvalue})`
        }
        else
        {
            document.title = `chats`;
        }
    },[currentvalue])

    return(

        <>
                
        </>
    )
}

export default UseCustomHooks;
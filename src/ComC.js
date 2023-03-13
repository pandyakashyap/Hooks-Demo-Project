import React from "react";
import { firstname } from "./App";


const ComC = () =>{
   return(
    <>
       <firstname.Consumer>{(firstname) => {
           return <h1> Hello {firstname} </h1>
       }}</firstname.Consumer>
    </>
   )
}

export default ComC;


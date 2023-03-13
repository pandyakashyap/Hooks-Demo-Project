import './App.css';
import React from 'react';
import ComA from './ComA';
import { createContext } from 'react';
import UseReducerExample from './UseReducerExample';
import UseStat from './UseStat';
import UseReducer from './UseReducer';
import UseCustomHooks from './UseCustomHooks';

const firstname = createContext();

function App() {
  
  return (
    <>   
      <firstname.Provider value={"Kashyap"}>
        <ComA />
      </firstname.Provider>
      <ComA />

      <UseReducerExample />

      <UseStat />

      <UseReducer />

      <UseCustomHooks />
      
    </>
  ) 
}
export default App;

// firstname use in ComC :-
export {firstname};

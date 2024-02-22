import React from 'react'
import { useState } from 'react';

const State = () => {
    // let data = "Neeraj";
    // let data = "anil";
    // function updateData(){
    //     {
    //     data="ritesh";
    //     alert(data);
    //    }
    // } 
    console.warn("rerendering.......")
    
    const[data,metData]=useState("tushar");
    function updateData(){
        metData("Nishant");
    }
    console.warn("__________");
  return (
    <div>
        <h1>Name: {data}</h1>

        <div className='centter'>
            {/* <button onClick={updateData}>Update Data</button> */}
            <button onClick={updateData}>Update Data</button>

        </div>
    </div>
  )
}

export default State
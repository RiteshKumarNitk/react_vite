import React from 'react'
import { useState } from 'react'


const Counting = () => {

    const[data,setData]=useState(0)

    function updateData(){
        setData(data-1)
    }
    function updateDataplus(){
        setData(data+1)
    }

   console.warn("counter is working");

   return (
    <div>
        <h1>{data}</h1>
        <button onClick={updateData}>+ Data</button>
        <button onClick={updateDataplus}>- Data</button>
    </div>
  )
}

export default Counting
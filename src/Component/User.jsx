import React from 'react'

const User = () => {
    
    // alert("hello");
    let data ="ritesh";
    function apple(){
        // alert("function called")
        data="neeraj";
        alert(data);
    }
  return (
    <div>
        <h1>hello world</h1>
        {/* <button onClick={apple()}>click me </button> */}
        {/* <button onClick={apple}>click me </button> */}
        {/* <button onClick={alert("hello")}>click me </button> */}
        {/* <button onClick={()=>alert("hello")}>click me </button> */}
        {/* <button onClick={()=>apple()}>click me </button> */}
        <h2>{data}</h2>
        {/* <button onClick={apple}> click me </button> */}
        {/* <button onClick={apple}> click me </button> */}
        {/* <button onClick={apple}> click me </button> */}

    </div>
  )
}

export default User;


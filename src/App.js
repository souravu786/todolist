import React from 'react';
import "./index.css";
import OrderTask from "./OrderTask";


const App =()=>{

   const currDate = new Date().toLocaleDateString();  
 
  return (
    <div className="main_div">
    <div className="center_div">
    <br/>
    <h1 className="head_part">
      ToDo List
    </h1>
    <br/>
    <p>Date: {currDate} </p>
    <br/>
      <div>
        <OrderTask/>
      </div>
         
    </div>
        
    </div>
  );
  }

export default App;

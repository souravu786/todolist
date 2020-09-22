import React from 'react';
import "./index.css";
import "./ToggleCSS.css";
import ToggleStatus from "./ToggleStatus";

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div key={item.key}>  
       <ol>
           <li>

           <ToggleStatus />
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}
                 className="task_text"
             /> 
             
        <button onClick={() => {
            props.deleteItem(item.key)
        }} className="button_delete">x</button>
               
           </li>
       </ol>   

    </div>})
    return <div>        
        <label>
        {listItems}
        </label>
    
    </div>;
  }

  export default ListItems;
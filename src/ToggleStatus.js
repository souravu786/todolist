import React,{Component} from 'react';
import "./ToggleCSS.css";

class ToggleStatus extends Component{
    
    render(){
      return (
    <label class="tgl">  
    <input type="checkbox" unchecked />
    <span data-on="Complete" data-off="Incomplete"></span>
    </label>
      );
    }
}

export default ToggleStatus;
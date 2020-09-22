import React , {Component} from 'react';
import ListItems from "./ListItems";
import "./index.css";

class OrderTask extends Component{
    
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.deleteallItem = this.deleteallItem.bind(this);
  }
  
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })
  }

  deleteallItem(value){
      const removeItems = this.state.items.filter( items =>
        items.value==value);
      this.setState({
        items: removeItems
      });
  };
  
  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +""+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })       
  }

  componentWillMount() {
    let itemsList = localStorage.getItem('items');
    if (itemsList) {
      this.setState({
        items: JSON.parse(localStorage.getItem('items')) });

    }
  }
  componentDidUpdate() {
    localStorage.setItem('items', JSON.stringify(this.state.items));
  }
    
  render(){
      return(<>
      <div>
           <input type="text" className="input_text" 
           placeholder="Enter task..." 
           value= {this.state.currentItem.text} 
           onChange={this.handleInput}/>
           <button type="submit" onClick={this.addItem} className="button_add" >+</button>
           <div className="list_div">
           {this.state.items.text}           
            <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
            </div> 
            <div>
            <hr/>
            <br/>
                <button className="button_deleteAll" onClick={this.deleteallItem}>Delete All</button>
            </div>       
        </div>
      </>
      )
  }
}

export default OrderTask;
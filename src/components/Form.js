import React, {Component} from 'react';


class Form extends Component{
    constructor(){
        super();
        this.state={
            imgUrl:"",
            name:"",
            price:0,
            newUrl: "",
            newName: "",
            newPrice:0,
            addinventory:false
        }
        this.handleUrlInput=this.handleUrlInput.bind(this);
        this.handleNameInput=this.handleNameInput.bind(this);
        this.handlePriceInput=this.handlePriceInput.bind(this);
        this.cancelInput=this.cancelInput.bind(this)
    }
    handleUrlInput(e){
        this.setState({newUrl:e.target.value});
    }
    handleNameInput(e){
            this.setState({newName:e.target.value})
    }
     handlePriceInput(e){
                this.setState({newPrice:e.target.value})
     }
            
    cancelInput=() => {
        this.setState({ newName:"", newPrice:0, newUrl:""})
    }
    handleAddInventory = () => {
        const bodyObj={
            newName:this.state.newName,
            newUrl: this.state.newUrl
        }
        this.props.inventoryfn(bodyObj)
        this.cancelInput();
    }
    

    render(){
        return(
            <section>
            <div className="inputField">   
            <img  className="urlImg" src={this.state.newUrl} alt={this.state.name}/>
            <p>Image Url:</p>
            <input placeholder=" Add New Url" value={this.state.newUrl} onChange={this.handleUrlInput}/>
            <p>Product Name:</p>
            <input placeholder="Add New Name" value={this.state.newName} onChange={this.handleNameInput}/>
            <p>Price:</p>
            <input placeholder="" value={this.state.newPrice} onChange={this.handlePriceInput} />
            <ul>
            <button onClick={this.cancelInput} className="cancelBtn">Cancel</button>
            <button  onClick={this.handleAddInventory} className="AddBtn">Add to Inventory</button>
            </ul>
            </div>
    </section>
        )
}
}
export default Form;
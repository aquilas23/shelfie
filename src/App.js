import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import axios from 'axios'


class App extends Component{
    constructor(){
      super();
      this.state={
        inventory: []
      }
    }
    componentDidMount(){
      axios.get('/api/inventory')
      .then(res => {
        this.setState({inventory: res.data})
      })
      .catch(err => console.log(err));
    }
    postInventory(inventory){
      axios.post('/api/product')
      .then(res => {
        this.setState({inventory: res.data})
      })
      .catch(err => console.log(err));
    }
    editName = (id, newName) => {
      let body = {name: newName};
  
      axios.put(`/api/product/${id}`, body)
      .then(res => {
        this.setState({inventory: res.data})
      })
      .catch(err => console.log(err));
    }
  
    deleteProduct = (id) => {
      axios.delete(`/api/product/${id}`)
      .then(res => {
        this.setState({inventory: res.data})
      })
      .catch(err => console.log(err));
    }

  render(){
    return(
      <div>  
            <Header/>
            <Form 
            inventoryfn={this.state.inventory}/>
            < Dashboard  inventory={this.state.inventory}
          nameFn={this.editName}
          deleteFn={this.deleteProduct}/>

        </div>
    )
  }
}

export default App;

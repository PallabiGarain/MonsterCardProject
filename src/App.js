import React,{ Component } from 'react';
//import logo from './logo.svg';
import {Cardlist} from './Component/Card-List/card-list.component';
import {SearchBox} from './Component/Search-box/search-box.cpomponent';
import './App.css';
//import { render } from '@testing-library/react';

class App extends Component{

  constructor(){ 
      super();
      this.state={
        monster:[],
        searchField:""
      };

  }


  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(user =>this.setState({monster:user}));
  }
   //what ever we write inside the cmponet is the children of thet component 
    render(){
      
      const{monster,searchField}=this.state;
      const filteredMonster= monster.filter(x=>
        x.name.toLowerCase().includes(searchField.toLowerCase())
      );
        return (
          <div className="App">
            <h1>Monster Holodex</h1>

            <SearchBox  placeholdernew='Search Here' handleChange={
                e=>{this.setState({searchField:e.target.value},a=>{console.log(this.state)});
               
                }}/>  
            <Cardlist monsters={filteredMonster}>
           
              </Cardlist> 
               
               
           
          </div>
        );
      }
      
    
  
}

export default App;

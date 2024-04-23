import { Component } from 'react';

import CardList from './components/Card-List/card-box.component.jsx';

import SearchBox from './components/search-box/search-box.component.jsx';

import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField:''
     
    };
  } 

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users') 
    .then((Response)=> Response.json())
    .then((users)=> 
    this.setState(
      ()=>{
      return{monsters:users};
      }
      // ()=>{
      //   console.log(this.state)
      // },
  
))
  }

 onSearchChange= (Event) => {
  console.log(Event.target.value);
  const searchField=Event.target.value.toLowerCase();

  this.setState(() =>{
    return {searchField};
  })

 }

  render(){
    
    const {monsters, searchField}=this.state;
    const{onSearchChange}=this;

    const filtermonsters=monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

   return<div className='App'>

    <h1 className='app-title'>Monsters Rolodex</h1>

    <SearchBox 
    className='monsters-search-box'
    onChangeHandler={onSearchChange} 
    placeholder={'search-monsters'}
    />
   
    <CardList  monsters={filtermonsters}/> 
        
   </div>
     
  }

}   
 
export default App;


















import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home.js';
//import Product from './components/Product.js';
import Signin from './components/Signin.js';
import Header from './components/Header.js';
import Productslist from './components/Productslist';
import Register from './components/Register'; 
import logo from './logo.svg';
import './App.css';

// main page
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleEnter =()=> {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    this.setState({ 
      username,
      password
    })
  } 
  
  render(){
    let {username, password} = this.state;
    
  return (
    <div className="App">
      <BrowserRouter>
              <Header username = {username}/>
              <Route path = "/Register" render={(props)=>{
                  return <Register {...props} handleEnter={this.handleEnter} username = {username}/>
              }}/>
              <Route exact path = "/" render={(props)=> {
                  return <Home {...props} username={username}/>
              }}/>
              <Route path = "/products" component={Productslist}/>
              <Route path = "/signin" render={(props)=> {
                  return <Signin {...props} handleEnter={this.handleEnter} username = {username}/>
              }}/> 
      </BrowserRouter>
    </div>
  );
}
}
export default App;


import './App.css';
import Menu from './component/Menu/Menu.js'

import routes from './routes';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'


import React, { Component } from 'react';

class App extends Component {
  showContent =(routes)=>{
    var result = null;
    if (routes.length>0){
      result = routes.map((routes,index)=>{
        return (
        <Route 
          key = {index}
          path = {routes.path}
          exact = {routes.exact}
          component ={routes.main}
        />)
      });
    }
    return <Switch>{result}</Switch>
  }
  render() {
    return (
      <Router>
        <div>
      <Menu/>
      <div className="container">
        
        <div className="row">
          {this.showContent(routes)}
          
        </div>        
      </div>
    </div>
      </Router>
    );
  }
}

export default App;


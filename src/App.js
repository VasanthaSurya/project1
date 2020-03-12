import React from 'react';
import './App.css';
import P from './Profile';
import R from './Resume';
import {BrowserRouter,Route,Link} from 'react-router-dom';


let App=()=>{
  return(
    <BrowserRouter>
      <Route exact path="/" component={P}></Route>
      <Route exact path="/resume" component={R}/>
    </BrowserRouter>  
  )             
}
export default App;

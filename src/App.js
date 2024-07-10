import logo from './logo.svg';
import './App.css';
import User from './User';
import { useState, useEffect, useRef } from 'react';
import React, { Component } from 'react';
// Import Bootstrap Component
import { Button, Table } from 'react-bootstrap';
/*import User_class_compnt from './User_class_compnt';
import User_JSX from './User_JSX';
import Props_example from "./Props_example"; 
import Conditional_rendering from "./Conditional_rendering";*/
/* import Pass_function_as_props from './Pass_function_as_props';
import Render_in_react from './Render_in_react'; */
import './style.css';
import { Routes, Route, Link, useAsyncError } from 'react-router-dom';
import UserDynamicRouting from './UserDynamicRouting';
import PreviousPropsWithHook from './PreviousPropsWithHook';
import { CommonContext } from './components/CommonContext';
import { render } from '@testing-library/react';
import Main from './components/Main';
import UpdateButton from './components/UpdateButton';
import Header from './components/Header';
import Footer from './components/Footer';
/* import Add from './components/crud/add'; */
import Enter_data from './components/crud/Enter_data';
   

class App extends React.Component{
   constructor(){
         super();
         // This is a function.
         this.updateColor=(color) => {
            // this.setState({
            //    color:"red"
            // })
            // Pass dynamic color
            this.setState({
               color:color
            })
         }
         this.state = {
            color:"green",
            updateColor:this.updateColor
         }
         
   }
   render() {      
      return (
         <div className='App'>
          {/*  <CommonContext.Provider value={this.state}>
            <Header />
           <h1>Context API</h1>
           <Main />
           <UpdateButton />
           <Footer />
           </CommonContext.Provider> */}
           {/* <Add /> */}

           {/* Sale Order Page */}
           <Enter_data />
          
          </div>
      )
   }
}

export default App;

import React,{ PureComponent } from 'react';
// Using Props
export default class Pure_component_props extends PureComponent {
     render(){
      console.log("Check User Rerendering"); // Rerendering is running. This is problem.
      return (
         <div className='App'>
            <h1>Pure Component Props {this.props.count}</h1>
           </div>      
      )
   }   
}
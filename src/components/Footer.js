import React from 'react';
import { CommonContext } from './CommonContext';
export default class Footer extends React.Component{
   render(){
    return(
        <div className="App">
            <CommonContext.Consumer >
                {
                    ({color})=>(
                        <h1 style={{backgroundColor:color}}>Footer Page.</h1>
                    )
                }
            </CommonContext.Consumer>
        </div>
    )
   }
}
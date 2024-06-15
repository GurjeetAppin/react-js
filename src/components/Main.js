import React from 'react';
import { CommonContext } from './CommonContext';
export default class Main extends React.Component{
   render(){
    return(
        <div className="App">
            <CommonContext.Consumer >
                {
                    ({color})=>(
                        <h1 style={{backgroundColor:color}}>Hello this is Main Page.</h1>
                    )
                }
            </CommonContext.Consumer>
        </div>
    )
   }
}
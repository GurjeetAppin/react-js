import { useState, useEffect } from 'react';
function UseEffect_with_props(props){
    useEffect(() =>{
        alert("Count is ==" + props.count);
    },[props.count]);
 return (
    <div className='App'>
        <h1>State Count Prpos {props.count}</h1>
        <h1>State data Prpos {props.data}</h1>
        
    </div>
 )
}


export default UseEffect_with_props;
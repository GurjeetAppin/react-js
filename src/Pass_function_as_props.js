import React from 'react';
export default function Pass_function_as_props(props){
    return(
        <div>
            <h1>Pass function as Props</h1>
            <button onClick={() => props.data()}>Call Data function</button>
        </div>
    )
}
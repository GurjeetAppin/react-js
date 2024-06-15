import React, {useEffect, useRef} from 'react';
export default function PreviousPropsWithHook(props){
    const lastValue = useRef();
    useEffect(() => {
        lastValue.current=props.count;
    });
    const previousValue = lastValue.current;
    return(
        <>
            <h2>PreviousPropsWithHook Component</h2>
            <h6>Current Value {props.count}</h6>
            <h6>Previous value {previousValue}</h6>
            <h6>Differnce between value {props.count - previousValue}</h6>
        </>
    );
}
import React from 'react';
import { CommonContext } from './CommonContext';
import { Button } from 'react-bootstrap';
export default function UpdateButton(){
    return(
        <CommonContext.Consumer>
            {
                ({updateColor}) => (
                    <Button onClick={() => updateColor('orange')}>Update Color</Button>
                )
            }
        </CommonContext.Consumer>
    )
}
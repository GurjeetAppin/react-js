// First method of import component
/* import React from 'react';
class User_class_compnt extends React.Component{
} */
/* 
Functional component is used mostly and class components used in react like 20%
Don't forget render() in class component
*/
/* 
Some difference in class component like props calling, state define etc.
*/
import React,{Component} from 'react';
export default class User_class_compnt extends Component{
    render(){
        return (
            <h1>Hello Class Component</h1>
        );
    }
}

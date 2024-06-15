import React, {Component} from 'react';
export default class Props_with_class_compnt extends Component{
    // When we used class component Render() is must. Without Render() class component not run.
    
    render(){
        // Check how many props are coming.
        //console.log(this.props);
        return (
            <div>
                Props With Class component
                <h1>Name :- {this.props.name}</h1>
                <h3>Email :- {this.props.email}</h3>
            </div>
        )
    }
}
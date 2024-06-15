import React from "react";

export default class Render_in_react extends React.Component{
    // Use a state
    constructor(){
        super();
        this.state = {
            email : "test@gmail.com"
        }
    }
    render(){
        //console.log("Render Method call", this.props);
        console.log("Render Method call", this.state.email);
        return(
            <div>
                <h1>Render in React</h1>
                {/* <span>Render name :- {this.props.name}</span> */}
                <button onClick={() => this.setState({email : "gurjeet@test.com"})}>Update Email</button>
            </div>
        )
    }
}
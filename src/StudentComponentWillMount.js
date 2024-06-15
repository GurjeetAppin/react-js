import React from "react";
class StudentComponentWillMount extends React.Component{
    componentWillUnmount(){
        alert("Component Will Unmount Called");
    }
    render(){
        return(
            <div className='App'>
                <h1>Student Component Will Unmount</h1>
            </div>
        );
    }
}
export default StudentComponentWillMount;  
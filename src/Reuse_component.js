export default function Reuse_component(props){
    return(
        <div>
        <span className="reuse_component">User name :- {props.data.name}</span>
        <span className="reuse_component">Email :- {props.data.email}</span>
        <span className="reuse_component">Address :- {props.data.address}</span>
        {/* <button onclick={ alert(props.data.name)}>Click me</button> */}
        </div>
    )
}
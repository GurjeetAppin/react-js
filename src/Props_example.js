export default function Props_example(props){ // Access with parameter.
    //console.log(props);
    return(
        <div style={{backgroundColor:"green"}}>
            <h1>Props Component</h1>
            <h3>{props.name}</h3> {/* Get the value :- props.name */}
           {/*  <h4>{props.email}</h4>
            <h5>{props.other.address}</h5>
            <h6>{props.other.mobile_no}</h6> */}
        </div>
    )
}
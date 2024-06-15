export default function Lifting_state_up(props){
    let data = {name:"Prabhjot Singh", email:"Test$demo.com", contact:111};
    return(
        <>
        <h2>User name :- </h2>
        <button onClick={() => props.alert(data)} className="primary">Click me</button>
        </>
    );
}
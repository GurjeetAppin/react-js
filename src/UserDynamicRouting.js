import { useParams } from 'react-router-dom';
export default function UserDynamicRouting() {
	const {id,name,email} = useParams();
	//console.log(id);
  	return(
		<>
			<h1>User Dynamic Routing</h1>
			<h4>Hi this is a user no :- {id}</h4>
			<h4>This is a user name :- {name}</h4>
			<h4>User email Id :- {email}</h4>
		</>
	)
  	
}


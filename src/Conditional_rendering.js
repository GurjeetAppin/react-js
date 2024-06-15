import { useState } from "react";
export default function Conditional_rendering(){
    //const [loggedIn, setLoggedIn] = useState(true);
   
        
            {/* Not Recommand method */}
            // if(loggedIn){
            //    return(
            //     <div><h1>Welcome User Profile</h1></div>
            //    )
            // } else {
            //     return(
            //         <div><h1>Profile Component</h1></div>
            //     )
            // }

            // Recommand Method
            // return(
            //     <div>
            //         {loggedIn?<h1>Welcome User Profile</h1>:<h1>Profile component</h1>}
            //     </div>
            // );

            // If{}if else{}else{} Condition
            const [loggedIn, setLoggedIn] = useState(1);
            return(
                <div>
                    {loggedIn == 1 ? <h1>Welcome Admin Profile</h1> : loggedIn == 2 ? <h1>Welcome User Profile</h1> : <h1>Profile component</h1>}
                </div>
            );
            <h1>Profile Component with Conditional Rendering</h1>     
}
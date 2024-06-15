function User_JSX(){
    return (<div>
        <h1>Hello JSX</h1>
        {10 + 20}
        </div>);
}

// Without JSX
/* import React from 'react';
function User_JSX(){
    return React.createElement("h1", null, "HTML without JSX");
} */

export default User_JSX;
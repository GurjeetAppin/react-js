import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <div>
            <Link  to={"/"}>Home</Link><br />
            <Link  to={"/about"}>About</Link>
        </div>
    )
}
import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <header>
            <h1>To do</h1>
            <nav>
                <Link to={'/'}>HOME&emsp;</Link>
                <Link to={'/todos'}>TODOS</Link>
            </nav>
        </header>
    )
}

export default Header
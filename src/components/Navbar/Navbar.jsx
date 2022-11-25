import React from "react"; //parece q lo necesito
import SearchBar from "../Search/SearchBar"
import { Link } from "react-router-dom";

export default function Navbar(props){
return (
<div>
    <Link to={"/home"}>
        <span>Home</span>
    </Link>
    <Link to={"/about"}>
        <span>About</span>
    </Link>
    <SearchBar onSearch={props.onSearch} />
</div>
);
}
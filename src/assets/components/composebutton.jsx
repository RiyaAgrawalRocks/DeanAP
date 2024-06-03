import React from "react";
import add from "../imgs/add.png"
import { Link } from 'react-router-dom';

export default function Compose(){
    return(
        <div className="button-container">
            <Link to={{ pathname: "/new"}} className="compose" >
                <div >Compose</div>
            </Link>
            <Link to={{ pathname: "/new"}}>
                <img src={add} alt="" className="compose-button-img" />
            </Link>
        </div>
    );
}
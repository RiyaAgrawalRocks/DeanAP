import React from "react";
import check from "../imgs/check.png"
import outward from "../imgs/outward.png"
import Footer from "./footer";
import { Link , useParams} from 'react-router-dom';

export default function EditEntry(){
    const {id}=useParams();
    console.log(id);

    function handleSaveClick(){
        return alert("entry edited")
    }
    function handleOutwardClick(){
        return alert("entry marked as outward")
    }
    return(
        <>
        <div className="newentry-container">
            <h1>EDIT</h1>
            <div className="input-container">
            <div className="label">
                <label htmlFor="id">ID</label>
                <input type="text" name="id" className="input" defaultValue=""/>
            </div>
            <div  className="label">
                <label htmlFor="roll">ROLL</label>
                <input type="text" name="roll" className="input"/>
            </div>
            <div className="label">
                <label htmlFor="date">DATE</label>
                <input type="date" name="date" className="input"/>
            </div>
            <div className="label">
                <label htmlFor="name">NAME</label>
                <input type="text" name="name" className="input"/>
            </div>
            <div className="label">
                <label htmlFor="department">DEPARTMENT</label>
                <input type="text" name="department" className="input"/>
            </div>
            <div className="label">
                <label htmlFor="subject">SUBJECT</label>
                <input type="text" name="subject" className="input"/>
            </div>
            <div className="label">
                <label htmlFor="remark">REMARK</label>
                <input type="text" name="remark" className="input"/>
            </div>  
            <div className="label">
                <label htmlFor="app-doc">APPLICATION OR DOCUMENT</label>
                <input type="text" name="app-doc" className="input"/>
            </div>      
            </div>      
            <div className="edit-container">
                <Link to={{ pathname:"/"}} className="edit" onClick={handleSaveClick}>
                    <div >Save
                        <img src={check} alt="" className="edit-button-img" />
                    </div>
                </Link>
                <Link to={{ pathname:"/"}} className="Outward" onClick={handleOutwardClick} >
                    <div >Outward
                        <img src={outward} alt="" className="Outward-button-img" />
                    </div>
                </Link>
            </div>
                 
        </div>
        <Footer /> 
        </>
    );
}
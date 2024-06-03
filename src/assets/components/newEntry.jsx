import React , {useState} from "react";
import axios from 'axios';
import add from "../imgs/add.png"
import { Link } from 'react-router-dom';
import Footer from "./footer";

export default function NewEntry(){

    const [formData, setFormData] = useState({
        id: '',
        roll: '',
        date: '',
        name: '',
        department: '',
        subject: '',
        remark: '',
        application_document: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCreateClick = async (e) => {
        e.preventDefault();

        console.log('Submitting data:', formData);

        try {
            const response = await axios.post('compose/', {
                id: formData.id,
                rollno: formData.roll,
                date: formData.date,
                name: formData.name,
                department: formData.department,
                subject: formData.subject,
                remarks: formData.remark,
                application_document: formData.application_document,
                state: 'inward'
            });

            console.log('Response:', response.data);
            alert('Entry created successfully!');
        } catch (error) {
            console.error('Error creating entry:', error);
            alert('Failed to create entry. Please try again.');
        }
    };

    return(
        <>
        <div className="newentry-container">
            <h1>NEW ENTRY</h1>
            <form className="input-container" onSubmit={handleCreateClick}>
                <div className="label">
                    <label htmlFor="id">ID</label>
                    <input type="text" name="id" className="input" value={formData.id} onChange={handleChange}/>
                </div>
                <div  className="label">
                    <label htmlFor="roll">ROLL</label>
                    <input type="text" name="roll" className="input" value={formData.roll} onChange={handleChange}/>
                </div>
                <div className="label">
                    <label htmlFor="date">DATE</label>
                    <input type="date" name="date" className="input" value={formData.date} onChange={handleChange}/>
                </div>
                <div className="label">
                    <label htmlFor="name">NAME</label>
                    <input type="text" name="name" className="input" value={formData.name} onChange={handleChange}/>
                </div>
                <div className="label">
                    <label htmlFor="department">DEPARTMENT</label>
                    <input type="text" name="department" className="input" value={formData.department} onChange={handleChange}/>
                </div>
                <div className="label">
                    <label htmlFor="subject">SUBJECT</label>
                    <input type="text" name="subject" className="input" value={formData.subject} onChange={handleChange}/>
                </div>
                <div className="label">
                    <label htmlFor="remark">REMARK</label>
                    <input type="text" name="remark" className="input" value={formData.remark} onChange={handleChange}/>
                </div>  
                <div className="label">
                    <label htmlFor="app-doc">APPLICATION OR DOCUMENT</label>
                    <input type="text" name="app-doc" className="input"  value={formData.appDoc} onChange={handleChange}/>
                </div>      
                    
                <div className="create-container">
                    <Link to={{ pathname:"/"}} className="create" onClick={handleCreateClick} >
                        <div >Create
                            <img src={add} alt="" className="create-button-img" />
                        </div>
                    </Link>
                </div> 
            </form>  
        </div>
        <Footer /> 
        </>
    );
}
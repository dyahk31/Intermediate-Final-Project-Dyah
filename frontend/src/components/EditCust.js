import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import fb from "../images/fb.jpg"; 
import ig from "../images/ig.jpg";
import twt from "../images/twt.jpg";  


const EditCust = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [type_service, setType_service] = useState("Choose your type of service");
    const [note, setNote] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getCustById();
    }, []);

    const UpdateCust = async (e) => {
        e.preventDefault();

        try{
            await axios.patch(`http://localhost:2000/cust/${id}`, {
                name,
                address,
                type_service,
                note
            });
            navigate("/CustCard");
        }catch(error){
            console.log(error);
        };
    };

    const getCustById = async () => {
        const response = await axios.get (`http://localhost:2000/cust/${id}`);
        setName(response.data.name);
        setAddress(response.data.address);
        setType_service(response.data.type_service);
        setNote(response.data.note);
    }

    return(
        <div className="edit-content">
        
{/* edit form */}
            <form onSubmit={UpdateCust} className="edit-form">
                <div className="form-content">
                    <label>Your Name</label>
                    <div className="control">
                        <input 
                        type="text" 
                        className='form-control' 
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        placeholder='name'/>
                    </div>
                </div>

                <div className="form-content">
                    <label>Your Address</label>
                    <input 
                        type="text" 
                        className='form-control' 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} 
                        placeholder='address'/>
                </div>

                <div className="form-content">
                    <label>Choose Laundry Service</label>
                    <select 
                    class="form-control" 
                    value={type_service}
                    onChange={(e) => setType_service(e.target.value)}>
                        <option value="normal">Normal</option>
                        <option value="express">Express</option>
                    </select>
                </div>

                <div className="form-content">
                    <label>Additional Information</label>
                    <input 
                        type="text" 
                        className='form-control' 
                        value={note}
                        onChange={(e) => setNote(e.target.value)} 
                        placeholder='Additional Informations'/>
                </div>

                <div className="form-submit">
                    <button type='submit' className="btn btn-success">Submit</button>
                </div>
            </form>

            <div className="footer">
                    <center>
                    <div className="footer-box">
                        <img src={fb}/>
                        <img src={ig}/>
                        <img src={twt}/>
                    </div>

                    <div className="footer-nav">
                        <a href="/">Home</a>
                        <a href="/service">Service</a>
                    </div>

                    <div className="credits">
                    &copy;By Dyah
                    </div>
                    </center>
                </div>

        </div>
    )
};

export default EditCust;

import React, {useState} from "react";
import axios from "axios";
import arrow from "../images/arrow.jpg";
import {useNavigate} from "react-router-dom";
import time from "../images/time.jpg";
import basket from "../images/basket.jpg";
import time2 from "../images/time2.jpg";
import basket2 from "../images/basket2.jpg";
import fb from "../images/fb.jpg"; 
import ig from "../images/ig.jpg";
import twt from "../images/twt.jpg";  

const Service = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [type_service, setType_service] = useState("Choose your type of service");
    const [note, setNote] = useState("");
    const navigate = useNavigate();

    const saveForm = async (e) => {
        e.preventDefault();

        try{
            await axios.post('http://localhost:2000/cust', {
                name,
                address,
                type_service,
                note
            });
            navigate("/CustCard");
        }catch(error){
            console.log(error);
        }
    };

    return (
        <div className="service-content">
            <div class="row">
                <div class="col-sm-3">
                    <div class="card">
                    <div class="card-body">
                    <div class="card-body" id="card-body-1">
                        <div class="card-box">
                            <div class="card-box-small">
                                <p>2 Days Laundry Service</p>
                            </div>

                            <h1 class="price">Rp 35.000</h1>
                            <p class="weight">/ per Kg</p>
                            <br/>
                            <h6 class="nb">Only 3kg Minimum Order</h6>
                        </div>
                    </div>
                    
                    <div class="icon">
                        <div class="time-icon">
                        <img src={time}/>
                        <p class="icon-text">Next Day Delivery</p>
                        </div>

                        <div class="basket-icon">
                        <img src={basket}/>
                        <p class="icon-text">Free Pick Up & Delivery</p>
                        </div>

                    </div>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card">
                    <div class="card-body">
                    <div class="card-body" id="card-body-2">
                        <div class="card-box">
                            <div class="card-box-small">
                                <p>Sameday Express Service</p>
                            </div>

                            <h1 class="price2">Rp 50.000</h1>
                            <p class="weight2">/ per Kg</p>
                            <br/>
                            <h6 class="nb2">Only 3kg Minimum Order</h6>
                        </div>
                    </div>

                    <div class="icon">
                        <div class="time-icon">
                        <img src={time2}/>
                        <p class="icon-text">5 Hours Turnaround Time</p>
                        </div>

                        <div class="basket-icon">
                        <img src={basket2}/>
                        <p class="icon-text">Free Pick Up & Delivery</p>
                        </div>

                    </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="content-text">
                <h1>Order Now!</h1>
                <img src={arrow} alt="arrow" />
            </div>

{/* booking form */}
            <form onSubmit={saveForm} class="submit-form">
                <div className="form-content">
                    <label class="form-label">Your Name</label>
                    <div className="control">
                        <input 
                        type="text" 
                        class="form-control" 
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        placeholder='name'/>
                    </div>
                </div>

                <div className="form-content">
                    <label class="form-label">Your Address</label>
                    <input 
                        type="text" 
                        class="form-control" 
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
                        class="form-control" 
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
}

export default Service;

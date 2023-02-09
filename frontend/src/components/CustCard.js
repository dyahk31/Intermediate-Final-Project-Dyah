import React, {useState, useEffect} from "react";
import axios from "axios";
import card from "../images/card.png";
import { Link } from "react-router-dom";
import {Card} from 'react-bootstrap';
import fb from "../images/fb.jpg"; 
import ig from "../images/ig.jpg";
import twt from "../images/twt.jpg";  

const CustList = () => {
    const [custs, setCust] = useState([]);

    useEffect(() => {
        getCust();
    }, []);

    const getCust = async () => {
        const response = await axios
        .get("http://localhost:2000/cust")
        .then((res) => {
            console.log(res);
            setCust(res.data);
        })

        .catch((err) => {
            console.log(err);
        })

        // setCust(response.data);
        // console.log(response.data);
    };

    const DeleteCust = async (id) => {
        try{
            await axios.delete(`http://localhost:2000/cust/${id}`);
            getCust();
        }catch(error){
            console.log(error);
        }
    };

    return(
        <div class="d-flex flex-column min-vh-100">
        <div className="title">
            <h2><b>Your Order is On Process!</b></h2>
        </div>

        <div className="img-card">
            <img src={card}></img>
        </div>

            <div className="card-data">
                {custs.map((data) => {
                    return(
                    <Card style={{width: '50rem'}}>
                        <Card.Body key={data.id}>
                                <p>Name : {data.name}</p>
                                <p>Address : {data.address}</p>
                                <p>Type of Service : {data.type_service}</p>
                                <p>Note : {data.note}</p>
                                <center>
                                <Link to={`/service`}>
                                    <button class="btn btn-info">Service</button>
                                </Link>
                                <Link to={`/edit/${data.id}`}>
                                    <button class="btn btn-warning">Edit</button>
                                </Link>
                                <button onClick={() => DeleteCust(data.id)} class="btn btn-danger">Delete</button>
                                </center>
                                
                        </Card.Body>
                    </Card>
                )
            })}
            </div>
            
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

export default CustList;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";



const Home = () => {
    const navigate = useNavigate();
    //const navigateEmpView = () => { navigate('/ViewEmpDetails'); };
    const navigateEmpView = () => {
        window.location.href = "/ViewEmpDetails"
    };
    const navigateAdduser = () => { navigate('/AddEmpDetails'); };


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
                <div className="container-fluid justify-content-center">
                    <button className="btn btn-outline-success text-white" onClick={navigateEmpView}>
                        View Employee Details</button>
                    <button className="btn btn-outline-success text-white" onClick={navigateAdduser}>
                        Add Employee Details</button>

                </div>
            </nav>
        </div>
    );
}

export default Home;



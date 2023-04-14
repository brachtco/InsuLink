import React from 'react';
import {useLocation} from 'react-router-dom';

function SelectedSchool(props) {

    const location = useLocation();
    const CollegeName = location.state.collegeName;

    return(
    <div>
        {/* TODO: Link navbar buttons to associated pages */}
        
        
        <div id="WesternSchool">
            <p>Current University: {CollegeName}</p>
            <div style={{ display: "flex", justifyContent: "center"}}>
             <button id="btn-1">
                <div>
                    <p id="cardTag">Name</p>
                    <p id="cardTag">Age</p>
                    <p id="cardTag">Hometown</p>
                    <p id="cardTag">3 things about me</p>
                </div>
             </button>
             <button id="btn-2">
                <div>
                    <p id="cardTag">Name</p>
                    <p id="cardTag">Age</p>
                    <p id="cardTag">Hometown</p>
                    <p id="cardTag">3 things about me</p>
                </div>
             </button>
             <button id="btn-3">
                <div>
                    <p id="cardTag">Name</p>
                    <p id="cardTag">Age</p>
                    <p id="cardTag">Hometown</p>
                    <p id="cardTag">3 things about me</p>
                </div>
             </button>
             <button id="btn-4">
                <div>
                    <p id="cardTag">Name</p>
                    <p id="cardTag">Age</p>
                    <p id="cardTag">Hometown</p>
                    <p id="cardTag">3 things about me</p>
                </div>
             </button>
             <button id="btn-5">
                <div>
                    <p id="cardTag">Name</p>
                    <p id="cardTag">Age</p>
                    <p id="cardTag">Hometown</p>
                    <p id="cardTag">3 things about me</p>
                </div>
             </button>
             </div>
        
        </div>
    </div>
    )

}; 

export default SelectedSchool;

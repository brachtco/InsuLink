import React from 'react';

function selectedStudent() {

    return(
    <div>
        {/* TODO: Link navbar buttons to associated pages */}
        
        
        <div id="westernSchool">
            <p>Current University</p>
            <Card style={{ display: "flex", justifyContent: "center"}}>
             <button id="btn-1">
                <Card>
                    <p id="cardTag">Name</p>
                    <p id="cardTag">Age</p>
                    <p id="cardTag">Hometown</p>
                    <p id="cardTag">3 things about me</p>
                </Card>
             </button>
             <button id="btn-2">
                <Card>
                    <p id="cardTag">Name</p>
                    <p id="cardTag">Age</p>
                    <p id="cardTag">Hometown</p>
                    <p id="cardTag">3 things about me</p>
                </Card>
             </button>
             <button id="btn-3">
                <Card>
                    <p id="cardTag">Name</p>
                    <p id="cardTag">Age</p>
                    <p id="cardTag">Hometown</p>
                    <p id="cardTag">3 things about me</p>
                </Card>
             </button>
             <button id="btn-4">
                <Card>
                    <p id="cardTag">Name</p>
                    <p id="cardTag">Age</p>
                    <p id="cardTag">Hometown</p>
                    <p id="cardTag">3 things about me</p>
                </Card>
             </button>
             <button id="btn-5">
                <Card>
                    <p id="cardTag">Name</p>
                    <p id="cardTag">Age</p>
                    <p id="cardTag">Hometown</p>
                    <p id="cardTag">3 things about me</p>
                </Card>
             </button>
             </Card>
        
        </div>
    </div>
    )

}; 

export default selectedStudent();
import React from 'react';

function selectedStudent() {

    return(
    <div>
        {/* TODO: Link navbar buttons to associated pages */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src="\client\src\logo.svg" width="30" height="30" alt=""></img>
                InsuLink
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
         <ul class="navbar-nav">
            <li class="nav-item active">
            <a class="nav-link" href="/home">Homepage</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/profile">Profile</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/logout">Logout</a>
            </li>
         </ul>
            </div>
        </nav>
        <header id="selectedHeader">InsuLink add logo here</header>
        <div id="westernSchool">
            <p>Current University</p>
            <card style={{ display: "flex", justifyContent: "center"}}>
             <button id="btn-1">
                <card>
                    <p id="cardTag">Name</p>
                    <p id="cardTag">Age</p>
                    <p id="cardTag">Hometown</p>
                    <p id="cardTag">3 things about me</p>
                </card>
             </button>
             <button id="btn-2">
                <card>
                    <p id="cardTag">Name</p>
                    <p id="cardTag">Age</p>
                    <p id="cardTag">Hometown</p>
                    <p id="cardTag">3 things about me</p>
                </card>
             </button>
             <button id="btn-3">
                <card>
                    <p id="cardTag">Name</p>
                    <p id="cardTag">Age</p>
                    <p id="cardTag">Hometown</p>
                    <p id="cardTag">3 things about me</p>
                </card>
             </button>
             <button id="btn-4">
                <card>
                    <p id="cardTag">Name</p>
                    <p id="cardTag">Age</p>
                    <p id="cardTag">Hometown</p>
                    <p id="cardTag">3 things about me</p>
                </card>
             </button>
             <button id="btn-5">
                <card>
                    <p id="cardTag">Name</p>
                    <p id="cardTag">Age</p>
                    <p id="cardTag">Hometown</p>
                    <p id="cardTag">3 things about me</p>
                </card>
             </button>
             </card>
        <footer id="selectedFooter">selected school | Code Riders™</footer>
        </div>
    </div>
    )

}; 

export default selectedStudent();
import React from 'react';

function easternSchool() {

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
            <a class="nav-link" href="/home">Homepage <span class="sr-only">(current)</span></a>
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
        <header id="easternHeader">InsuLink add logo here</header>
        <div id="easternSchool">
            <Card style={{ display: "flex", justifyContent: "center"}}>
                <button id="btn-1">Boston College</button>
                <button id="btn-2">Florida State University</button>
                <button id="btn-3">Harvard</button>
               <button id="btn-4">Duke</button>
             </Card>
        <footer id="easternFooter">Eastern Schools Code Riders™</footer>
        </div>
    </div>
    )

}; 

export default easternSchool();
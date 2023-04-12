import React from 'react';

function westernSchool() {

    return(
    <div>
        {/* TODO: Link navbar buttons to associated pages */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">InsuLink</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
         <ul class="navbar-nav">
            <li class="nav-item active">
            <a class="nav-link" href="#">Homepage <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Logout</a>
            </li>
         </ul>
            </div>
        </nav>
        <header id="westernHeader">InsuLink add logo here</header>
        <div id="westernSchool">
            <card style={{ display: "flex", justifyContent: "center"}}>
             <button id="btn-1">Boston College</button>
                <button id="btn-2">Florida State University</button>
                <button id="btn-3">Harvard</button>
               <button id="btn4">Duke</button>
             </card>
        <footer id="westernFooter">Western Schools Code Riders™</footer>
        </div>
    </div>
    )

}; 

export default westernSchool();
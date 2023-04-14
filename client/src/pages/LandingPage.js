import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {

    return (
        <div id="landingPage" style={{ height: "100vh", position: "relative" }}>

            <div style={{ display: "flex", justifyContent: "center"}}>
                <img src="/insulinkLogoWithName.png" alt="Insulink Branded Logo" style={{ height: "500px" }} />
            </div>

            <br></br>

            <div style={{ display: "flex", justifyContent: "center"}}>
                {/* TODO: Make this button take you to homepage  */}
                <Link to="/HomePage" className="btn btn-primary">Get Started...</Link>
            </div>

            <div style={{ display: "flex", justifyContent: "center"}}>
                {/* TODO: Make this button take you to either login/signup */}
                <Link to="/UserProfile" className="btn btn-primary">User Profile/Settings</Link>
            </div>            

            <div style={{ display: "flex", justifyContent: "center"}}>
                {/* TODO: Make this button take you to selected student */}
                <Link to="/SelectedStudent" className="btn btn-primary">Selected Student</Link>
            </div>  

            <div style={{ display: "flex", justifyContent: "center"}}>
                {/* TODO: Make this button take you to homepage  */}
                <Link to="/Login" className="btn btn-primary">Login..</Link>
            </div>

            <div style={{ display: "flex", justifyContent: "center"}}>
                {/* TODO: Make this button take you to homepage  */}
                <Link to="/Signup" className="btn btn-primary">Signup...</Link>
            </div>       

        </div>
    )
};

export default LandingPage;
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
                {/* TODO: Make this button take you to either login/signup or homepage  */}
                <Link to="/HomeTest" className="btn btn-primary">Get Started...</Link>
            </div>

            <div style={{ display: "flex", justifyContent: "center"}}>
                {/* TODO: Make this button take you to either login/signup or homepage  */}
                <Link to="/UserProfile" className="btn btn-primary">User Profile/Settings</Link>
            </div>            

        </div>
    )
};

export default LandingPage;
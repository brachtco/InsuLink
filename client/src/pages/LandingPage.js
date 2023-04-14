import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

const styles = {
    buttonStyle: {
        textTransform: 'none',
        backgroundColor: '#151E3F',
        color: '#ffffff',
        // '&:hover': {
        //     backgroundColor: '#334999',
        // },
    }
}

function LandingPage() {

    return (
        <div id="landingPage" 
        style={{ height: "100vh", position: "relative"}}>

            <div style={{ display: "flex", justifyContent: "center"}}>
                <img src="/insulinkLogoWithName.png" alt="Insulink Branded Logo" 
                style={{ height: "500px", padding: '20px', margin: '10%' }} />
            </div>

            <br></br>

            <div style={{ display: "flex", justifyContent: "center"}}>
                {/* TODO: Make this button take you to homepage  */}
                <Link to="/HomePage" className="btn btn-primary">
                <Button variant='contained' style={styles.buttonStyle}>
                    Get Started...
                </Button> 
                </Link>
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
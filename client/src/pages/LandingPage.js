import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { AuthUtil } from '../utils/auth';

const styles = {
    buttonStyle: {
        textTransform: 'none',
        backgroundColor: '#151E3F',
        color: '#ffffff',
        paddingLeft: "100px",
        paddingRight: '100px',
        height: '50px'
        // '&:hover': {
        //     backgroundColor: '#334999',
        // },
    }
}

const token = AuthUtil.getToken();

function LandingPage() {

    return (
        <div id="landingPage" 
        style={{ minHeight: "100vh", position: "relative"}}>

            <div style={{ display: "flex", justifyContent: "center"}}>
                <img src="/insulinkLogoWithName.png" alt="Insulink Branded Logo" 
                style={{ height: "350px", padding: '20px', margin: '3%' }} />
            </div>

            <br></br>

            <div style={{ display: "flex", justifyContent: "center"}}>
                {token ? 
                (<Link to="/HomePage" className="btn btn-primary">
                    <Button variant='contained' style={styles.buttonStyle}>
                        Get Started...
                    </Button> 
                </Link>) : 
                (<Link to="/Login" className="btn btn-primary">
                <Button variant='contained' style={styles.buttonStyle}>
                    Get Started...
                </Button> 
            </Link>)}
            </div>     
        </div>
    )
};

export default LandingPage;
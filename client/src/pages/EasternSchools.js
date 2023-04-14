import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function EasternSchools() {

    return (
        <div id="EasternSchools" style={{ height: "100vh", position: "relative" }}>

            <div id="selectEasternSchool" style={{ display: "flex", justifyContent: "center", marginBottom: "50px", marginTop: "50px" }}>
                <h1>Select Eastern School...</h1>
            </div>

            <div id="easternSchools" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                    <Link to="/SelectedSchool" state={{collegeName:'Boston College', collegePic:'/assets/images/BC.jpeg'}} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" component="span" size="large">
                            Boston College
                        </Button>
                    </Link>
                </div>
                <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                    <Link to="/SelectedSchool" state={{collegeName:'Duke', collegePic:'/assets/images/Duke.png'}} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" component="span" size="large">
                            Duke
                        </Button>
                    </Link>
                </div>                
                <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                    <Link to="/SelectedSchool" state={{collegeName:'Florida State University', collegePic:'/assets/images/FSU.png'}} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" component="span" size="large">
                            Florida State University
                        </Button>
                    </Link>
                </div>
                <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                    <Link to="/SelectedSchool" state={{collegeName:'Harvard', collegePic:'/assets/images/Harvard.jpeg'}} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" component="span" size="large">
                            Harvard
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default EasternSchools;

import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function WesternSchools() {

    return (
        <div id="WesternSchools" style={{ height: "100vh", position: "relative" }}>

            <div id="selectWesternSchool" style={{ display: "flex", justifyContent: "center", marginBottom: "50px", marginTop: "50px" }}>
                <h1>Select Western School...</h1>
            </div>

            <div id="westernSchools" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                    <Link to="/SelectedSchool" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" component="span" size="large" style={{ marginLeft: "30px", marginRight: "30px" }}>
                            University of Utah
                        </Button>
                    </Link>
                </div>
                <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                    <Link to="/SelectedSchool" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" component="span" size="large" style={{ marginLeft: "30px", marginRight: "30px" }}>
                            San Diego State University
                        </Button>
                    </Link>
                </div>
                <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                    <Link to="/SelectedSchool" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" component="span" size="large" style={{ marginLeft: "30px", marginRight: "30px" }}>
                            University of Oregon
                        </Button>
                    </Link>
                </div>
                <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                    <Link to="/SelectedSchool" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" component="span" size="large" style={{ marginLeft: "30px", marginRight: "30px" }}>
                            Arizona State University
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default WesternSchools;

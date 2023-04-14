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
                    <Link to="/SelectedSchool" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" component="span" size="large" style={{ marginLeft: "30px", marginRight: "30px" }}>
                            Boston College
                        </Button>
                    </Link>
                </div>
                <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                    <Link to="/SelectedSchool" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" component="span" size="large" style={{ marginLeft: "30px", marginRight: "30px" }}>
                            Florida State University
                        </Button>
                    </Link>
                </div>
                <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                    <Link to="/SelectedSchool" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" component="span" size="large" style={{ marginLeft: "30px", marginRight: "30px" }}>
                            Harvard
                        </Button>
                    </Link>
                </div>
                <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                    <Link to="/SelectedSchool" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" component="span" size="large" style={{ marginLeft: "30px", marginRight: "30px" }}>
                            Duke
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default EasternSchools;

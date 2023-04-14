import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function HomePage() {

    return (
        <div id="HomePage" style={{ height: "100vh", position: "relative" }}>

            <div id="selectRegion" style={{ display: "flex", justifyContent: "center", marginBottom: "50px", marginTop: "50px" }}>
                <h1>Select Region...</h1>
            </div>

            <div id="westernEastern" style={{ display: "flex", justifyContent: "space-around" }}>
                <Box sx={{ '& button': { m: 1 } }}>
                    <Link to="/WesternSchools" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" component="span" size="large" style={{ marginLeft: "30px", marginRight: "30px" }}>
                            Western
                        </Button>
                    </Link>
                    <Link to="/EasternSchools" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" component="span" size="large" style={{ marginLeft: "30px", marginRight: "30px" }}>
                            Eastern
                        </Button>
                    </Link>                        
                </Box>
            </div>
        </div>
    )
};

export default HomePage;
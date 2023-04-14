import React from 'react';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

function HomePage() {

    return (
        <div id="HomePage" style={{ height: "100vh", position: "relative" }}>

            <div id="selectRegion" style={{ display: "flex", justifyContent: "center", marginBottom: "50px" }}>
                <h1>Select Region...</h1>
            </div>

            <div id="westernEastern" style={{ display: "flex", justifyContent: "space-around" }}>
                <Box sx={{ '& button': { m: 1 } }}>
                    <Link to="/westernSchools" variant="contained" size="large" style={{ marginLeft: "30px", marginRight: "30px" }}>
                        Western
                    </Link>
                    <Link to="/easternSchools" variant="contained" size="large" style={{ marginLeft: "30px", marginRight: "30px" }}>
                        Eastern
                    </Link>
                </Box>
            </div>
        </div>
    )
};

export default HomePage;
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function HomePage() {

    return (
        <div id="HomePage" style={{ height: "100vh", position: "relative" }}>

            <div id="selectRegion" style={{ display: "flex", justifyContent: "center", marginBottom: "50px" }}>
                <h1>Select Region...</h1>
            </div>

            <div id="westernEastern" style={{ display: "flex", justifyContent: "space-around" }}>
                <Box sx={{ '& button': { m: 1 } }}>
                    <Button variant="contained" size="large" style={{ marginLeft: "30px", marginRight: "30px" }}>
                        Western
                    </Button>
                    <Button variant="contained" size="large" style={{ marginLeft: "30px", marginRight: "30px" }}>
                        Eastern
                    </Button>
                </Box>
            </div>
        </div>
    )
};

export default HomePage;
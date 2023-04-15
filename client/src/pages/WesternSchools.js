import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

function WesternSchools() {

    return (
        <div id="WesternSchools" style={{ height: "100vh", position: "relative" }}>

            <div id="selectWesternSchool" style={{ display: "flex", justifyContent: "center", marginBottom: "50px", marginTop: "50px" }}>
                <h1>Select Western School...</h1>
            </div>

            <div id="WesternSchool" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ width: '100%' }}>
                    <Stack spacing={6} alignItems="center">

                        {/* Arizona State University */}
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <Link to="/SelectedSchool" state={{ collegeName: 'Arizona State University' }} style={{ textDecoration: 'none' }}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image="/assets/images/ASU.jpeg"
                                        alt="ASU"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Arizona State University
                                        </Typography>
                                    </CardContent>
                                </Link>
                            </CardActionArea>
                        </Card>

                        {/* San Diego State University */}
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <Link to="/SelectedSchool" state={{ collegeName: 'San Diego State University' }} style={{ textDecoration: 'none' }}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image="/assets/images/SDSU.jpeg"
                                        alt="SDSU"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            San Diego State University
                                        </Typography>
                                    </CardContent>
                                </Link>
                            </CardActionArea>
                        </Card>

                        {/* University of Oregon */}
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <Link to="/SelectedSchool" state={{ collegeName: 'University of Oregon' }} style={{ textDecoration: 'none' }}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image="/assets/images/Oregon.jpeg"
                                        alt="Oregon"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            University of Oregon
                                        </Typography>
                                    </CardContent>
                                </Link>
                            </CardActionArea>
                        </Card>

                        {/* University of Utah */}
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <Link to="/SelectedSchool" state={{ collegeName: 'University of Utah' }} style={{ textDecoration: 'none' }}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image="/assets/images/UofU.png"
                                        alt="UofU"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            University of Utah
                                        </Typography>
                                    </CardContent>
                                </Link>
                            </CardActionArea>
                        </Card>
                    </Stack>
                </Box>
            </div>



            {/* <div id="westernSchools" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                    <Link to="/SelectedSchool" state={{collegeName:'Arizona State University', collegePic:'/assets/images/ASU.jpeg'}} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" component="span" size="large" >
                            Arizona State University
                        </Button>
                    </Link>
                </div>  
                <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                    <Link to="/SelectedSchool" state={{ collegeName: 'San Diego State University', collegePic: '/assets/images/SDSU.jpeg' }} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" component="span" size="large">
                            San Diego State University
                        </Button>
                    </Link>
                </div>
                <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                    <Link to="/SelectedSchool" state={{ collegeName: 'University of Oregon', collegePic: '/assets/images/Oregon.jpeg' }} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" component="span" size="large">
                            University of Oregon
                        </Button>
                    </Link>
                </div>
                <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                    <Link to="/SelectedSchool" state={{ collegeName: 'University of Utah', collegePic: '/assets/images/UofU.png' }} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" component="span" size="large">
                            University of Utah
                        </Button>
                    </Link>
                </div>
            </div> */}

        </div>
    )
};

export default WesternSchools;

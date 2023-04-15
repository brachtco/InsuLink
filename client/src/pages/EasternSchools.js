import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

function EasternSchools() {

    return (
        <div id="EasternSchools" style={{ height: "100vh", position: "relative" }}>

            <div id="selectEasternSchool" style={{ display: "flex", justifyContent: "center", marginBottom: "50px", marginTop: "50px" }}>
                <h1>Select Eastern School...</h1>
            </div>

            <div id="easternSchools" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                <Box sx={{ width: '100%' }}>
                    <Stack spacing={6} alignItems="center">

                        {/* Boston College */}
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <Link to="/SelectedSchool" state={{ collegeName: 'Boston College' }} style={{ textDecoration: 'none' }}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image="/assets/images/BC.jpeg"
                                        alt="BC"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Boston College
                                        </Typography>
                                    </CardContent>
                                </Link>
                            </CardActionArea>
                        </Card>

                        {/* Duke */}
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <Link to="/SelectedSchool" state={{ collegeName: 'Duke' }} style={{ textDecoration: 'none' }}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image="/assets/images/Duke.png"
                                        alt="Duke"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Duke
                                        </Typography>
                                    </CardContent>
                                </Link>
                            </CardActionArea>
                        </Card>

                        {/* Florida State University */}
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <Link to="/SelectedSchool" state={{ collegeName: 'Florida State University' }} style={{ textDecoration: 'none' }}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image="/assets/images/FSU.png"
                                        alt="FSU"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Florida State University
                                        </Typography>
                                    </CardContent>
                                </Link>
                            </CardActionArea>
                        </Card>

                        {/* Harvard */}
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <Link to="/SelectedSchool" state={{ collegeName: 'Harvard' }} style={{ textDecoration: 'none' }}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image="/assets/images/Harvard.jpeg"
                                        alt="Harvard"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Harvard
                                        </Typography>
                                    </CardContent>
                                </Link>
                            </CardActionArea>
                        </Card>
                    </Stack>
                </Box>

            </div>
        </div>
    )
};

export default EasternSchools;

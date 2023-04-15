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

    const schools = [
        {
            id: 1,
            collegeName: "Arizona State University",
            img: "/assets/images/ASU.jpeg",
            imgAlt: "Arizona State University"
        },
        {
            id: 2,
            collegeName: "San Diego State University",
            img: "/assets/images/SDSU.jpeg",
            imgAlt: "San Diego State University"
        },
        {
            id: 3,
            collegeName: "University of Oregon",
            img: "/assets/images/Oregon.jpeg",
            imgAlt: "University of Oregon"
        },
        {
            id: 4,
            collegeName: "University of Utah",
            img: "/assets/images/UofU.png",
            imgAlt: "University of Utah"
        }
    ];

    return (
        <div id="WesternSchools" style={{ minHeight: "100vh", position: "relative" }}>

            <div id="selectWesternSchool" style={{ display: "flex", justifyContent: "center", marginBottom: "50px", marginTop: "50px" }}>
                <h1>Select Western School...</h1>
            </div>

            <div id="WesternSchool" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ width: '100%' }}>
                    <Stack spacing={6} alignItems="center">
                        {schools.map(school => {
                            return (
                                <Card sx={{ maxWidth: 345 }} key={school.id} style={{ width: "500px" }}>
                                    <CardActionArea>
                                        <Link to="/SelectedSchool" state={{ collegeName: school.collegeName }} style={{ textDecoration: 'none' }}>
                                            <CardMedia
                                                component="img"
                                                height="250"
                                                image={school.img}
                                                alt={school.imgAlt}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {school.collegeName}
                                                </Typography>
                                            </CardContent>
                                        </Link>
                                    </CardActionArea>
                                </Card>
                            )
                        })}
                    </Stack>
                </Box>
            </div>
            
        </div>
    )
};

export default WesternSchools;

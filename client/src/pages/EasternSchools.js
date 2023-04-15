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

    const schools = [
        {
            id: 1,
            collegeName: "Boston College",
            img: "/assets/images/BC.jpeg",
            imgAlt: "Boston College"
        },
        {
            id: 2,
            collegeName: "Duke",
            img: "/assets/images/Duke.png",
            imgAlt: "Duke"
        },
        {
            id: 3,
            collegeName: "Florida State University",
            img: "/assets/images/FSU.png",
            imgAlt: "Florida State University"
        },
        {
            id: 4,
            collegeName: "Harvard",
            img: "/assets/images/Harvard.jpeg",
            imgAlt: "Harvard"
        }
    ];

    return (
        <div id="EasternSchools" style={{ minHeight: "100vh", position: "relative" }}>

            <div id="selectEasternSchool" style={{ display: "flex", justifyContent: "center", marginBottom: "50px", marginTop: "50px" }}>
                <h1>Select Eastern School...</h1>
            </div>

            <div id="easternSchools" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
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

export default EasternSchools;

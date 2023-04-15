import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

function SelectedSchool() {

    const location = useLocation();
    const CollegeName = location.state.collegeName;

    const students = [
        {
            id: 1,
            firstName: "John",
            lastName: "Johnson",
            age: "22",
            gender: "Male",
            interests: "Paddle tennis, art, and bikes",
            hometown: "Logan, UT",
            img: "/assets/images/InsulinkMale.jpg"
        },
        {
            id: 2,
            firstName: "Kate",
            lastName: "Kateson",
            age: "33",
            gender: "Female",
            interests: "Fly fishing, guitars, and music",
            hometown: "Provo, UT",
            img: "/assets/images/InsulinkFemale.jpeg"
        },
        {
            id: 3,
            firstName: "Mike",
            lastName: "Mikeson",
            age: "44",
            gender: "Male",
            interests: "Beer, food, and sports",
            hometown: "SLC, UT",
            img: "/assets/images/InsulinkMale.jpg"
        }
    ];

    return (
        <div id="selectStudent" style={{ height: "100vh", position: "relative" }}>

            <div id="selectWesternSchool" style={{ display: "flex", justifyContent: "center", marginBottom: "50px", marginTop: "50px" }}>
                <h1>{CollegeName}</h1>
            </div>

            <div id="WesternSchool" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                <Box sx={{ width: '100%' }}>
                    <Stack spacing={6} alignItems="center">
                        {students.map(student => {
                            return (
                                <Card sx={{ maxWidth: 345 }} key={student.id}>
                                    <CardActionArea>
                                        <Link to="/SelectedStudent" style={{ textDecoration: 'none' }}>
                                            <CardMedia
                                                component="img"
                                                height="250"
                                                image={student.img}
                                                alt="profile pic"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {student.firstName} {student.lastName}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Age: {student.age}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Gender: {student.gender}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Interests: {student.interests}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Hometown: {student.hometown}
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

export default SelectedSchool;

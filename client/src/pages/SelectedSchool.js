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
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from '../utils/queries';

function SelectedSchool() {

    const { data } = useQuery(QUERY_USERS);
    const getUsers = data?.users || [];

    getUsers.map(users => {
        return (
            console.log("getUsers users",users)
        )
    })

    const location = useLocation();
    const CollegeName = location.state.collegeName;

    return (
        <div id="selectStudent" style={{ minHeight: "100vh", position: "relative" }}>

            <div id="selectWesternSchool" style={{ display: "flex", justifyContent: "center", marginBottom: "50px", marginTop: "50px" }}>
                <h1>{CollegeName}</h1>
            </div>

            <div id="WesternSchool" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                <Box sx={{ width: '100%' }}>
                    <Stack spacing={6} alignItems="center">
                        {getUsers.map(student => {
                            return (
                                <Card sx={{ maxWidth: 345 }} key={student._id} style={{width: "500px"}}>
                                    <CardActionArea>
                                        <Link to={`/SelectedStudent/${student.id}`} style={{ textDecoration: 'none' }}>
                                            <CardMedia
                                                component="img"
                                                height="250"
                                                image={student.photo}
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

import React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useQuery } from "@apollo/client";
import { QUERY_USER } from '../utils/queries';
import { useParams } from 'react-router-dom';

function SelectedStudent() {

    //TODO: Need to query the DB for the selected student and bring their data to the page.
    const { id: userParam } = useParams();
    console.log('userParam: ', userParam)

    const { data } = useQuery(QUERY_USER, { variables: { id: userParam } });
    console.log('data: ', data)

    const userProfile = data?.user || {};

    console.log('userProfile: ', userProfile)

    const handleStudentConnect = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        //TODO: Need to actually send the student a message.
        alert(`You are now connected to this student!`);

    };

    return (
        <div id="student" style={{ display: "flex", justifyContent: "space-between", marginTop: "50px" }}>
            <div id="selectedStudent">
                <FormControl
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    style={{ height: "100vh", position: "relative" }}
                >
                    {/* Name */}
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        name="studentName"
                        variant="standard"
                        value={(userProfile.firstName && userProfile.lastName) ? (userProfile.firstName + ' ' + userProfile.lastName) : ""}
                        style={{ color: '#000' }}
                        InputProps={{
                            readOnly: true,
                        }}
                    />

                    {/* Age */}
                    <TextField
                        id="outlined-basic"
                        label="Age"
                        name="studentName"
                        variant="standard"
                        value={userProfile.age ?? ""}
                        InputProps={{
                            readOnly: true,
                        }}
                    />

                    {/* Hometown */}
                    <TextField
                        id="outlined-basic"
                        label="Hometown"
                        name="studentHometown"
                        variant="standard"
                        value={userProfile.hometown ?? ""}
                        InputProps={{
                            readOnly: true,
                        }}
                    />

                    {/* Hobbies */}
                    <TextField
                        id="filled-multiline-static"
                        label="Hobbies"
                        variant="standard"
                        multiline
                        rows={2}
                        value={userProfile.interests ?? ""}
                        InputProps={{
                            readOnly: true,
                        }}
                    />

                    {/* Gender */}
                    <TextField
                        id="outlined-basic"
                        label="Gender"
                        name="studentGender"
                        variant="standard"
                        value={userProfile.gender ?? ""}
                        InputProps={{
                            readOnly: true,
                        }}
                    />

                    {/* Smoke? */}
                    <TextField
                        id="outlined-basic"
                        label="Smoke?"
                        name="studentSmoke"
                    />

                    {/* Drink? */}
                    <TextField
                        id="outlined-basic"
                        label="Drink?"
                        name="studentDrink"
                    />

                    {/* Connect button */}
                    <Button variant="contained" onClick={handleStudentConnect}>Connect!</Button>

                </FormControl>

            </div>

            <div id="profilePicture">
                <img
                    src={userProfile.photo ?? ""}
                    alt="Student Pic"
                    style={{ height: "500px", border: "2px solid black", borderRadius: "5px", padding: "10px" }}
                />
            </div>
        </div>

    );
};

export default SelectedStudent;

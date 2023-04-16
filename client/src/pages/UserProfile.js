import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import { useQuery } from "@apollo/client";
import { QUERY_ME } from '../utils/queries';

function UserProfile() {

    // Query "me" from the resolvers, to display my profile data to the page
    const { data } = useQuery(QUERY_ME);
    const myProfile = data?.me || [];

    const [profileFirstName, setFirstName] = useState('');
    const [profileLastName, setLastName] = useState('');
    const [profileGender, setGender] = useState('');
    const [profileAge, setAge] = useState('');
    const [profileHometown, setHometown] = useState('');
    const [profileHobbies, setHobbies] = useState('');
    const [profileSmoke, setSmoke] = useState('');
    const [profileDrink, setDrink] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state
        if (inputType === 'profileFirstName') {
            setFirstName(inputValue);
        }
        else if (inputType === 'profileLastName') {
            setLastName(inputValue);
        }        
        else if (inputType === 'profileGender') {
            setGender(inputValue);
        }
        else if (inputType === 'profileAge') {
            setAge(inputValue);
        }
        else if (inputType === 'profileHometown') {
            setHometown(inputValue);
        }
        else if (inputType === 'profileHobbies') {
            setHobbies(inputValue);
        }
        else if (inputType === 'profileSmoke') {
            setSmoke(inputValue);
        }
        else if (inputType === 'profileDrink') {
            setDrink(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // Check First Name
        if (!profileFirstName) {
            alert('First name is required!');
            return;
        }
        // Check Age
        else if (!profileLastName) {
            alert('Last name is required!');
            return;
        }        
        // Check Age
        else if (!profileAge) {
            alert('Age is required!');
            return;
        }
        // Check Hometown
        else if (!profileHometown) {
            alert('Hometown is required!');
            return;
        }
        // Check Gender
        else if (!profileGender) {
            alert('Gender is required!');
            return;
        }
        // Check Smoke
        else if (!profileSmoke) {
            alert('Smoking preference is required!');
            return;
        }
        // Check Drink
        else if (!profileDrink) {
            alert('Drinking preference is required!');
            return;
        }
        // Check Hobbies
        else if (!profileHobbies) {
            alert('Please enter at least 1 hobby!');
            return;
        } else {
            //TODO: Need to actually store this data in the database.
            alert(`
            Hello ${profileFirstName} ${profileLastName}, 
            gender: ${profileGender}, 
            age ${profileAge}, 
            hometown of ${profileHometown}, 
            with hobbies ${profileHobbies}, 
            smoker: ${profileSmoke}, 
            drinker: ${profileDrink}
            `);
        };
    };

    return (
        <div id="profile" style={{ display: "flex", justifyContent: "space-between" }}>
            <div id="profileSettings">
                <FormControl
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    style={{ height: "100vh", position: "relative" }}
                >
                    {/* First Name */}
                    <TextField
                        value={ myProfile.firstName ? myProfile.firstName : '' }
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        name="profileName"
                        onChange={handleInputChange}
                    />

                    {/* Last Name  */}
                    <TextField
                        value={ myProfile.lastName ? myProfile.lastName : '' }
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        name="profileName"
                        onChange={handleInputChange}
                    />

                    {/* Age */}
                    <TextField
                        value={ myProfile.age ? myProfile.age : '' }
                        id="outlined-number"
                        label="Age"
                        type="number"
                        name="profileAge"
                        onChange={handleInputChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    {/* Hometown */}
                    <TextField
                        value={ myProfile.hometown ? myProfile.hometown : '' }
                        id="outlined-basic"
                        label="Hometown"
                        variant="outlined"
                        name="profileHometown"
                        onChange={handleInputChange}
                    />

                    {/* Hobbies */}
                    <TextField
                        value={ myProfile.interests ? myProfile.interests : '' }
                        id="outlined-multiline-static"
                        label="Hobbies"
                        name="profileHobbies"
                        multiline
                        rows={4}
                        onChange={handleInputChange}
                    />

                    {/* Gender */}
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="profileGender"
                        onChange={handleInputChange}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" checked={ myProfile.gender === "Female" ? true : false } />
                        <FormControlLabel value="male" control={<Radio />} label="Male" checked={ myProfile.gender === "Male" ? true : false } />
                        <FormControlLabel value="other" control={<Radio />} label="Other" checked={ myProfile.gender === "Other" ? true : false } />
                        <FormControlLabel value="hidden" control={<Radio />} label="Rather Not Say" checked={ myProfile.gender === "Rather Not Say" ? true : false } />
                    </RadioGroup>

                    {/* Smoke? */}
                    <FormLabel id="demo-radio-buttons-group-label">Smoke?</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="profileSmoke"
                        onChange={handleInputChange}
                    >
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    </RadioGroup>

                    {/* Drink? */}
                    <FormLabel id="demo-radio-buttons-group-label">Drink?</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="profileDrink"
                        onChange={handleInputChange}
                    >
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    </RadioGroup>

                    {/* Save button */}
                    <Button variant="contained" onClick={handleFormSubmit}>Save</Button>

                </FormControl>

            </div>

            <div id="profilePicture">
                <img
                    src="/profilePic.jpg"
                    alt="Profile Pic"
                    style={{ height: "500px", border: "2px solid black", borderRadius: "5px", padding: "10px" }}
                />
            </div>
        </div>

    );
};

export default UserProfile;
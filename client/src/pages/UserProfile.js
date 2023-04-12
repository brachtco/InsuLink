import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';



function UserProfile() {

    const [profileName, setName] = useState('');
    const [profileGender, setGender] = useState('');
    const [profileAge, setAge] = useState('');
    const [profileHometown, setHometown] = useState('');
    const [profileHobbies, setHobbies] = useState('');
    const [profileSmoke, setSmoke] = useState('');
    const [profileDrink, setDrink] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Defaulting these to "no" unless the user changes them to "yes".  Otherwise their default value won't be recognized by handleFormSubmit()
        setSmoke("no");
        setDrink("no");

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'profileName') {
            setName(inputValue);
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

        // Check Name
        if (!profileName) {
            setErrorMessage('Full name is required!');
            return;
        }
        // Check Age
        else if (!profileAge) {
            setErrorMessage('Age is required!');
            return;
        }
        // Check Hometown
        else if (!profileHometown) {
            setErrorMessage('Hometown is required!');
            return;
        }
        // Check Hobbies
        else if (!profileHometown) {
            setErrorMessage('Please enter at least 1 hobby!');
            return;
        } else {
            //TODO: Need to actually store this data in the database.
            alert(`Hello ${profileName}, gender ${profileGender}, age ${profileAge}, hometown of ${profileHometown}, with hobbies ${profileHobbies}, smoker: ${profileSmoke}, drinker: ${profileDrink}`);
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
                    {/* Name */}
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        name="profileName"
                        onChange={handleInputChange}
                    />

                    {/* Gender */}
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="profileGender"
                        onChange={handleInputChange}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>

                    {/* Age */}
                    <TextField
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
                        id="outlined-basic"
                        label="Hometown"
                        variant="outlined"
                        name="profileHometown"
                        onChange={handleInputChange}
                    />

                    {/* Hobbies */}
                    <TextField
                        id="outlined-multiline-static"
                        label="Hobbies"
                        name="profileHobbies"
                        multiline
                        rows={4}
                        onChange={handleInputChange}
                    />

                    {/* Smoke? */}
                    <FormLabel id="demo-radio-buttons-group-label">Smoke?</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="no"
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
                        defaultValue="no"
                        name="profileDrink"
                        onChange={handleInputChange}
                    >
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    </RadioGroup>

                    {/* Save button */}
                    <Button variant="contained" onClick={handleFormSubmit}>Save</Button>

                </FormControl>

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

            </div>

            <div id="profilePicture">
                <img
                    src="/profilePic.JPG"
                    alt="Profile Pic"
                    style={{ height: "500px", border: "2px solid black", borderRadius: "5px", padding: "10px" }}
                />
            </div>
        </div>

    );
};

export default UserProfile;
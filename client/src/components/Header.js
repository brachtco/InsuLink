import React from 'react';
// import { Link } from 'react-router-dom';

import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { AuthUtil } from '../utils/auth'
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
    palette: {
      primary: {
        main: '#EFF8E2',
      },
      secondary: {
        main: '#E8871E',
      },
    },
  });

const styles = {
    h1: {
        margin: '10%',
        padding: '10px',
        marginLeft: '40%',
        // textShadow: '1px 0 #000000, -1px 0 #000000, 0 1px #000000, 0 -1px #000000, 1px 1px #000000, -1px -1px #000000, 1px -1px #000000, -1px 1px #000000'
    },
    textDisplay: {
        display: 'flex',
        float: 'left'
    },
    navHeight: {
        minHeight: '100px',
    },
    buttonStyle: {
        display: 'flex',
        alignItems: 'flex-end',
        textTransform: 'none',
        backgroundColor: '#151E3F',
        color: '#ffffff',
    },
    buttonAlign: {
        justifyContent: 'end'
    }
    //^^ to be put on the div the buttons are in
};

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        AuthUtil.logout();
    };
    return (
        <ThemeProvider theme={theme}>
        <AppBar position='static' color='primary'>
        <header style={styles.navHeight}>
            <div>
                <div style={styles.textDisplay}>
                    <Link href='/' underline='none' color={'#E8871E'} >
                        <h1 style={styles.h1}>
                            InsuLink
                        </h1>
                    </Link>
                </div>
            </div>
            <div>
                {AuthUtil.loggedIn() ? (
                  <>
                    <Link to='/homepage'>
                        <Button variant='contained' style={styles.buttonStyle}>Home</Button>
                    </Link>
                    <Link to='/profile'>
                        <Button variant='contained' style={styles.buttonStyle}>Profile</Button>
                    </Link>
                    <Button onClick={logout} variant='contained' style={styles.buttonStyle}>Logout</Button>
                  </>
                ) : (
                  <>
                  </>
                )}
            </div>
        </header>
        </AppBar>
        </ThemeProvider>
    )
};

export default Header;
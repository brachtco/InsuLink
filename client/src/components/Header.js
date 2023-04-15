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
        marginTop: '20%',
        // textShadow: '1px 0 #000000, -1px 0 #000000, 0 1px #000000, 0 -1px #000000, 1px 1px #000000, -1px -1px #000000, 1px -1px #000000, -1px 1px #000000'
    },
    textDisplay: {
        display: 'flex',
        float: 'left'
    },
    navStyle: {
        minHeight: '100px',
    },
    buttonStyle: {
        textTransform: 'none',
        backgroundColor: '#151E3F',
        color: '#ffffff',
        margin: '10px',
    },
    buttonAlign: {
        display: 'row',
        float: 'right',
        padding: '35px',
    }
};

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        AuthUtil.logout();
    };
    return (
        <ThemeProvider theme={theme}>
        <AppBar position='static' color='primary'>
        <header style={styles.navStyle}>
            <div>
                <div style={styles.textDisplay}>
                    <Link href='/' underline='none' color={'#E8871E'} >
                        <h1 style={styles.h1}>
                            InsuLink
                        </h1>
                    </Link>
                </div>
            </div>
            <div style={styles.buttonAlign}>
                {AuthUtil.loggedIn() ? (
                  <>
                    <Link
                        href='/HomePage'
                        underline='none'
                        component={Button}
                        variant='contained'
                        style={styles.buttonStyle}
                        >
                            Home
                    </Link>
                    <Link
                        href='/UserProfile'
                        underline='none'
                        component={Button}
                        variant='contained'
                        style={styles.buttonStyle}
                        >
                            Profile
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
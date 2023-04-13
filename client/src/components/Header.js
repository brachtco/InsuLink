import React from 'react';
// import { Link } from 'react-router-dom';

import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import { createTheme } from '@mui/material/styles';

import { AuthUtil } from '../utils/auth'
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
    palette: {
      primary: {
        main: '#E8871E',
      },
      secondary: {
        main: '#E8871E',
      },
    },
  });

const styles = {
    h1: {
        margin: '10%',
        padding: '10px'
    },
    navSizing: {
        display: 'flex',
        float: 'left'
    },
    navHeight: {
        minHeight: '100px',
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
        <header style={styles.navHeight}>
            <div>
                <div style={styles.navSizing}>
                    <Link href='/' underline='none' color={'#000000'} >
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
                        <button>Home</button>
                    </Link>
                    <Link to='/profile'>
                        <button>Profile</button>
                    </Link>
                    <button onClick={logout}>Logout</button>
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
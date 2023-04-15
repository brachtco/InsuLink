import React from 'react';

import { createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
    palette: {
      primary: {
        main: '#E8871E',
      },
    },
  });

const styles = {
    footer: {
        backgroundColor: '#EFF8E2',
        // margin: '10%',
        height: '80px',
        display: 'block',
        boxShadow: '4px 6px 12px 4px rgba(0, 0, 0, 0.3), 2px 6px 20px 2px rgba(0, 0, 0, 0.29)',
        marginTop: '10px',
        position: 'relative',
        position: 'absolute',
        bottom: -950,
        width: '100%',
        height: '5rem',
    },
    h4: {
        paddingTop: '10px',
        display: 'flex',
        float: 'right',
        // textShadow: '1px 0 #E8871E, -1px 0 #E8871E, 0 1px #E8871E, 0 -1px #E8871E, 1px 1px #E8871E, -1px -1px #E8871E, 1px -1px #E8871E, -1px 1px #E8871E',
        color: '#151E3F',
        position: 'absolute',
        bottom: 30,
        left: 640
    }
}
const Footer = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
    return (
        <ThemeProvider theme={theme}>
            <footer style={styles.footer}>
                <Container maxWidth='lg' color='primary'>
                    <div>
                        <h4 color='#E8871E' style={styles.h4}>Code Riders™</h4>
                    </div>
                </Container>
            </footer>
        </ThemeProvider>
    )
};

export default Footer;

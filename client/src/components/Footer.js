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
        backgroundColor: '#E8871E',
        // margin: '10%',
        minHeight: '100px',
        display: 'block',
    },
    h4: {
        paddingTop: '10px',
        display: 'flex',
        float: 'right'
    }
}
const Footer = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
    return (
        <ThemeProvider theme={theme}>
            <footer style={styles.footer} className='MuiPaper-elevation4'>
                <Container maxWidth='lg' position='static' color='primary'>
                    <div>
                        <h4 color='#000000' style={styles.h4}>Code Riders™</h4>
                    </div>
                </Container>
            </footer>
        </ThemeProvider>
    )
};

export default Footer;

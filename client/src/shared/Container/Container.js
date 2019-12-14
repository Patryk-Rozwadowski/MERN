import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        MuiContainer: {
            maxWidthXl: {
                padding: '0',
            }
        }
    },
});

const ComponentContainer = ({variant = '', ...props}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container maxWidth={variant} {...props}>
                {props.children}
            </Container>
        </ThemeProvider>
    );
};

export default ComponentContainer;
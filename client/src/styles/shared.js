import {createMuiTheme} from "@material-ui/core/styles";
import {fade} from "@material-ui/core/styles/colorManipulator";


const white = '#fff';
const whiteBg = 'E6E6E6';
const red = '#f03652';


export const NavMaterial = createMuiTheme({
    palette: {
        primary: {
            main: '#37474f',
            transparent: fade('#37474f', 0.5)
        },
        secondary: {
            main: fade('#313131', 0.1)
        }
    }
});
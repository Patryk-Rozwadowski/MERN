import {makeStyles} from "@material-ui/core/styles";

const NavBlackMaterialStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        color: '#fff',
        underline: 'none',
        fontSize: 3
    },
    navBar: {
        backgroundColor: 'rgba(0, 0, 0, .75)',
        position: 'fixed',
        top: '0',
    }
});

export default NavBlackMaterialStyles;
import {makeStyles} from "@material-ui/core/styles";

const NavMaterialStyles = makeStyles({
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
        backgroundColor: 'rgba(0,0,0,0.15)',
        position: 'fixed',
        top: '0',
    }
});

export default NavMaterialStyles;
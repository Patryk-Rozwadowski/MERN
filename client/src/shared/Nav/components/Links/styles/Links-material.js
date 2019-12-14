import {makeStyles} from '@material-ui/core/styles';

const LinksStyles = makeStyles(() => ({
    link: {
        flexGrow: 1,
        color: 'white',
        width: '150px',
        underline: 'none'
    },
    linkButton: {
        underline: 'none',
        textAlign: 'center'
    }
}));

export default LinksStyles;
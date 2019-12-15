import React from 'react';
import {Link} from 'react-router-dom';

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './styles/UserItems.scss';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
});

const UserItems = props => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>

            <CardActionArea>
                <CardMedia
                    component='img'
                    alt={props.avatar.toString()}
                    height='200'
                    image={props.avatar}
                    title={props.name}
                />

                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                        <p className='user__name'>{props.name}</p>
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        {props.description ? props.description : 'No description provided!'}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>

                <Link to={`/${props.id}/images`}>
                    <Button size='small' color='primary'> Images </Button>
                </Link>

                <Link to={`/${props.id}/places`}>
                    <Button size='small' color='primary'> Places </Button>
                </Link>

                <Link to={`/${props.id}/profile`}>
                    <Button size='small' color='primary'> Profile </Button>
                </Link>

            </CardActions>

        </Card>
    );
};

export default UserItems;
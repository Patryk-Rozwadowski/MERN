import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Avatar from '../../../../shared/components/Avatar/Avatar';
import Copyright from '../../../../shared/components/CopyRight/Copyright';

class SignIn extends React.Component {

    render() {
        return (
            <section className='signin__container'>
                <div className='signin__forms'>
                    <Avatar />
                    <h1 className='section__title'>Sign in</h1>
                    <form noValidate>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Email Address'
                            name='email'
                            autoComplete='email'
                            autoFocus
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Password'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                        />
                        <FormControlLabel
                            control={<Checkbox value='remember' color='primary'/>}
                            label='Remember me'
                        />
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                            className='submit'
                        >
                            Sign In
                        </Button>
                        <Grid className='mg' container>
                            <Grid item xs>
                                <Link href='#' variant='body2'>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to='/signup' href='#' variant='body2'>
                                    {'Dont have an account? Sign Up'}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright/>
                        </Box>
                    </form>
                </div>
            </section>
        );
    }
}

export default SignIn;
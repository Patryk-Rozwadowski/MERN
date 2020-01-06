import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';

import Avatar from '../../../../components/Avatar/Avatar';
import Copyright from '../../../../components/CopyRight/Copyright';

class SignIn extends React.Component {
    render() {
        return (
            <section style={{backgroundImage: `url(https://source.unsplash.com/random)`}} className='signin__container'>
                <div className='signin__forms'>
                    <Avatar/>
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

                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                            className='submit'
                        >
                            Sign In
                        </Button>
                        <div className='row'>
                            <div className='grid-6 text-align-l mg-20'>
                                <Link href='#' variant='body2'>
                                    Forgot password?
                                </Link>
                            </div>

                            <div className='grid-6 text-align-r mg-20'>
                                <Link to='/signup' href='#' variant='body2'>
                                    {'Dont have an account? Sign Up'}
                                </Link>
                            </div>
                        </div>
                        <Copyright/>
                    </form>
                </div>
            </section>
        );
    }
}

export default SignIn;
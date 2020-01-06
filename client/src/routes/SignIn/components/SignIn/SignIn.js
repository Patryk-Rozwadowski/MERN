import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '../../../../shared/components/Link/Link';

import Avatar from '../../../../shared/components/Avatar/Avatar';
import Copyright from '../../../../shared/components/CopyRight/Copyright';
import InputField from '../../../../shared/components/InputField/InputField';

const SignIn = () => {

    return (
        <section style={{backgroundImage: `url(https://source.unsplash.com/random)`}} className='signin'>
            <div className='signin__forms'>
                <Avatar/>
                <h1 className='section__title'>Sign in</h1>
                <form noValidate>
                    <InputField
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
                    <InputField
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
                    <Grid mt={2} container direction='row'>
                        <Grid lg={6} justify align={'left'} item>
                            <Link to='/signup'>
                                Forgot password?
                            </Link>
                        </Grid>

                        <Grid lg={6} align={'right'} item>
                            <Link to='/signup'>
                                Dont have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid contaienr>
                        <Grid align={'center'}>
                            <Copyright/>

                        </Grid>
                    </Grid>
                </form>
            </div>
        </section>
    );
};

export default SignIn;
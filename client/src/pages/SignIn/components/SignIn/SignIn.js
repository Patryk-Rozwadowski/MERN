import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '../../../../components/Button/Button';
import Link from '../../../../components/Link/Link';

import Avatar from '../../../../components/Avatar/Avatar';
import Copyright from '../../../../components/CopyRight/Copyright';
import InputField from '../../../../components/InputField/InputField';

const SignIn = () => {
  return (
    <section
      style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
      className='signin'
    >
      <div className='signin__forms'>
        <Avatar />
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

          <Button dataCy='sign-in' type='submit' variant='info' fullWidth={true}>
            Sign In
          </Button>
          <Grid container direction='row'>
            <Grid lg={6} align={'left'} item>
              <Link to='/signup'>Forgot password?</Link>
            </Grid>

            <Grid lg={6} align={'right'} item>
              <Link to='/signup'>Dont have an account? Sign Up</Link>
            </Grid>
          </Grid>

          <Grid justify={'center'} container>
            <Grid item>
              <Copyright />
            </Grid>
          </Grid>
        </form>
      </div>
    </section>
  );
};

export default SignIn;

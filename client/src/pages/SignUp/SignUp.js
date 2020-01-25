import React from 'react';

import Grid from '@material-ui/core/Grid';

import Copyright from '../../components/CopyRight/Copyright';
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';
import Avatar from '../../components/Avatar/Avatar';
import InputField from '../../components/InputField/InputField';

const SignUp = React.memo(props => {
  return (
    <section
      style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
      className='sign-forms'
    >
      <div className='sign-forms__forms'>
        <Avatar />

        <h1 className='section__title'>Sign up</h1>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InputField
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputField
                variant='outlined'
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='lname'
              />
            </Grid>

            <Grid item xs={12}>
              <InputField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
              />
            </Grid>

            <Grid item xs={12}>
              <InputField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
            </Grid>
          </Grid>

          <Button
            dataCy='sign-up'
            type='submit'
            variant='info'
            fullWidth={true}
          >
            Sign Up
          </Button>

          <Grid container direction='row'>
            <Grid lg={12} align={'right'} item>
              <Link dataCy='link-to-signin' to='/sign-in'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>

        <Grid justify={'center'} container>
          <Grid item>
            <Copyright />
          </Grid>
        </Grid>
      </div>
    </section>
  );
});

export default SignUp;

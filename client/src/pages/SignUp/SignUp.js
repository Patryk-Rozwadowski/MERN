import React from 'react';

import Avatar from '../../components/Avatar/Avatar';
import SignUpForms from './Components/SignUpForms/SignUpForms';
import LinkToSignIn from './Components/LinkToSignIn/LinkToSignIn';
import CopyRight from './Components/CopyRight/CopyRight';

const SignUp = () => (
  <section
    style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
    className='sign-forms'
  >
    <div className='sign-forms__forms'>
      <Avatar />

      <h3 className='section__title'>Sign up</h3>
      <SignUpForms />
      <LinkToSignIn />
      <CopyRight />
    </div>
  </section>
);

export default SignUp;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './sign-in.styles';

const SignIn = () => {
  const dispatch = useDispatch();

  const googleSignInStartClickHandler = () => dispatch(googleSignInStart());
  const emailSignInStartHandeler = (email, password) =>
    dispatch(emailSignInStart({ email, password }));

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStartHandeler(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          handleChange={handleChange}
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStartClickHandler}
            isGoogleSignIn
          >
            {' '}
            Sign in with Google{' '}
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;

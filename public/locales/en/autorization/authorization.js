export default {
  signIn: {
    header: 'Sign In',
    formFields: {
      field1: 'Email',
      field2: 'Password'
    },
    link: 'Register',
    response_error: 'Something went wrong, please try again',
    request_error: 'Incorrect email or password'
  },
  registration: {
    header: 'Sign up',
    formFields: {
      field1: 'Name',
      field2: 'Last name',
      field3: 'Email',
      field4: 'Password',
      field5: 'Confirm your password'
    },
    requirement: {
      text1: 'Your password can’t be too similar to your other personal information.',
      text2: 'Your password must contain at least 8 characters.',
      text3: 'Your password can’t be a commonly used password.',
      text4: 'Your password can’t be entirely numeric.'
    },
    validation_errors: {
      error1: 'Name is required',
      error2: 'Last name is required',
      error3: 'Email is required',
      error4: 'Password is required',
      error5: 'Password is too short - should be 8 chars min',
      error6: 'Your password must contain at least one letter and one number',
      error7: 'Passwords must match'
    },
    link: 'Already have an account',
    response_error: 'Something went wrong, please try again',
    request_error: 'User with this email is already registered'
  },
};

import React from 'react';
import { makeSignInService } from './main/factories/services/sign-in-service-factory';
import { makeSignInValidation } from './main/factories/validation/sign-in-validation-factory';
import { makeSignUpValidation } from './main/factories/validation/sign-up-validation-factory';
import { SignIn, SignUp } from './presentation/pages'

export default function App() {
  return (
    //<SignIn signInUseCase={makeSignInService()} validator={makeSignInValidation()} />
    <SignUp validator={makeSignUpValidation()} />
  );
}

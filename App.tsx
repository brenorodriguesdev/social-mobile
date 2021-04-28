import React from 'react';
import { makeSignInService } from './main/factories/services/sign-in-service-factory';
import { SignIn, SignUp } from './presentation/pages'

export default function App() {
  return (
    <SignIn signInUseCase={makeSignInService()} />
  );
}

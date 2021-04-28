import { SignUp } from "../../../presentation/pages";
import { makeCreateUserService } from "../services/create-user-service-factory";
import { makeSignUpValidation } from "../validation/sign-up-validation-factory";
import React from 'react'

export function makeSignUpRoute(props: any) {
    return (
        <SignUp {...props} validator={makeSignUpValidation()} createUserUseCase={makeCreateUserService()} />
    )
}
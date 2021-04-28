import { SignIn } from "../../../presentation/pages";
import { makeSignInService } from "../services/sign-in-service-factory";
import { makeSignInValidation } from "../validation/sign-in-validation-factory";
import { makeAsyncStorageInfra } from "../infra/async-storage-infra-factory";
import React from 'react'

export function makeSignInRoute(props: any) {
    return (
        <SignIn {...props} validator={makeSignInValidation()} signInUseCase={makeSignInService()} saveAccessToken={makeAsyncStorageInfra()} />
    )
}
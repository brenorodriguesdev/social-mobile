import { SignInModel } from "../../domain/models/sign-in"
import { SignInUseCase } from "../../domain/useCases/sign-in"
import { HttpClient } from "../contracts/http-client"

export class SignInService implements SignInUseCase {
    constructor(private readonly httpClient: HttpClient) { }

    async sign(signInModel: SignInModel): Promise<string | Error> {
        const accessToken = await this.httpClient.post(signInModel)
        if (accessToken instanceof Error) {
            throw new Error('Credenciais Inválidas!')
        }
        return accessToken
    }
}
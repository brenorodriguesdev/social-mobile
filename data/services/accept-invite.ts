import { AcceptInviteUseCase } from "../../domain/models/accept-invite";
import { HttpClient } from "../contracts/http-client";
import { LoadAccessToken } from "../contracts/load-access-token";

export class AcceptInviteService implements AcceptInviteUseCase {
    constructor(private readonly httpClient: HttpClient, private readonly loadAccessToken: LoadAccessToken) { }
    async accept(idConvite: number): Promise<void | Error> {
        const accessToken = await this.loadAccessToken.load()
        const data = await this.httpClient.post({ idConvite }, accessToken)
        if (data instanceof Error) {
            throw data
        }
    }
}
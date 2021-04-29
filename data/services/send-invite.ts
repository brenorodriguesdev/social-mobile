import { UserModel } from "../../domain/models/user";
import { SendInviteUseCase } from "../../domain/useCases/send-invite";
import { HttpClient } from "../contracts/http-client";
import { LoadAccessToken } from "../contracts/load-access-token";

export class SendInviteService implements SendInviteUseCase {
    constructor(private readonly httpClient: HttpClient, private readonly loadAccessToken: LoadAccessToken) { }

    async send(idGuest: number): Promise<void | Error> {
        const accessToken = await this.loadAccessToken.load()
        const data = await this.httpClient.post({ idGuest }, accessToken)
        if (data instanceof Error) {
            throw data
        }
    }
}
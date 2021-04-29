import { InviteModel } from "../../domain/models/invite";
import { GetInviteListUseCase } from "../../domain/useCases/get-invite-list";
import { HttpClient } from "../contracts/http-client";
import { LoadAccessToken } from "../contracts/load-access-token";

export class GetInviteListService implements GetInviteListUseCase {
    constructor(private readonly httpClient: HttpClient, private readonly loadAccessToken: LoadAccessToken) { }
    async get(): Promise<InviteModel[]> {
        const accessToken = await this.loadAccessToken.load()
        const invites = await this.httpClient.get({}, accessToken)
        return invites
    }
}
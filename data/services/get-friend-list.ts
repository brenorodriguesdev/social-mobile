import { UserModel } from "../../domain/models/user";
import { GetFriendListUseCase } from "../../domain/useCases/get-friend-list";
import { HttpClient } from "../contracts/http-client";
import { LoadAccessToken } from "../contracts/load-access-token";

export class GetFriendListService implements GetFriendListUseCase {
    constructor(private readonly httpClient: HttpClient, private readonly loadAccessToken: LoadAccessToken) { }

    async get(idUser: number): Promise<UserModel[]> {
        const accessToken = await this.loadAccessToken.load()
        const users = await this.httpClient.get({ idUser }, accessToken)
        return users
    }
}
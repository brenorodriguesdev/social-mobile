import { UserModel } from "../../domain/models/user";
import { SearchUserUseCase } from "../../domain/useCases/search-user";
import { HttpClient } from "../contracts/http-client";
import { LoadAccessToken } from "../contracts/load-access-token";

export class SearchUserService implements SearchUserUseCase {
    constructor(private readonly httpClient: HttpClient, private readonly loadAccessToken: LoadAccessToken) { }

    async search(user: string): Promise<UserModel[]> {
        const accessToken = await this.loadAccessToken.load()
        const users = await this.httpClient.get({ user }, accessToken)
        return users
    }
}
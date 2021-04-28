import { UserModel } from "../../domain/models/user";
import { SearchUserUseCase } from "../../domain/useCases/search-user";
import { HttpClient } from "../contracts/http-client";

export class SearchUserService implements SearchUserUseCase {
    constructor(private readonly httpClient: HttpClient) { }

    async search(user: string): Promise<UserModel[]> {
        const users = await this.httpClient.get({ user })
        return users
    }
}
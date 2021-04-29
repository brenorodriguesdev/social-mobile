import { GetCountNotificationUseCase } from "../../domain/useCases/get-count-notification";
import { HttpClient } from "../contracts/http-client";
import { LoadAccessToken } from "../contracts/load-access-token";

export class GetCountNotificationService implements GetCountNotificationUseCase {
    constructor(private readonly httpClient: HttpClient, private readonly loadAccessToken: LoadAccessToken) { }
    async get(): Promise<number> {
        const accessToken = await this.loadAccessToken.load()
        return await this.httpClient.get({}, accessToken)
    }
}
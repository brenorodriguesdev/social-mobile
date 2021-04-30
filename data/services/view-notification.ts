import { ViewNotificationUseCase } from "../../domain/useCases/view-notification";
import { HttpClient } from "../contracts/http-client";
import { LoadAccessToken } from "../contracts/load-access-token";

export class ViewNotificationService implements ViewNotificationUseCase {
    constructor(private readonly httpClient: HttpClient, private readonly loadAccessToken: LoadAccessToken) { }

    async view(): Promise<void> {
        const accessToken = await this.loadAccessToken.load()
        await this.httpClient.put({}, accessToken)
    }
}
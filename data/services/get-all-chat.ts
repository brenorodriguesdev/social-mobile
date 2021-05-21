import { ChatModel } from "../../domain/models/chat";
import { GetAllChatUseCase } from "../../domain/useCases/get-all-chat";
import { HttpClient, LoadAccessToken } from "../contracts";

export class GetAllChatService implements GetAllChatUseCase {
    constructor(private readonly httpClient: HttpClient, private readonly loadAccessToken: LoadAccessToken) { }
    async get(): Promise<ChatModel[]> {
        const accessToken = await this.loadAccessToken.load()
        return await this.httpClient.get({}, accessToken)
    }
}
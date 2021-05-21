import { makeAsyncStorageInfra } from "../infra/async-storage-infra-factory";
import { Axios } from "../../../infra/axios";
import { GetAllChatService } from "../../../data/services/get-all-chat";

export const makeGetAllChatService = (): GetAllChatService => {
    const axios = new Axios('getAllChat')
    return new GetAllChatService(axios, makeAsyncStorageInfra())
}
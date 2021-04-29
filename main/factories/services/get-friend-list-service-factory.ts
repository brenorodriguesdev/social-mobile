import { makeAsyncStorageInfra } from "../infra/async-storage-infra-factory";
import { Axios } from "../../../infra/axios";
import { GetFriendListService } from "../../../data/services/get-friend-list";

export const makeGetFriendListService = (): GetFriendListService => {
    const axios = new Axios('searchUser')
    return new GetFriendListService(axios, makeAsyncStorageInfra())
}
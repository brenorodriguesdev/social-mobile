import { SearchUserService } from "../../../data/services/search-user";
import { makeAsyncStorageInfra } from "../infra/async-storage-infra-factory";
import { Axios } from "../../../infra/axios";

export const makeSearchUserService = (): SearchUserService => {
    const axios = new Axios('searchUser')
    return new SearchUserService(axios, makeAsyncStorageInfra())
}
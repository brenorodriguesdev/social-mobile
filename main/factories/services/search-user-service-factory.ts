import { SearchUserService } from "../../../data/services/search-user";
import { AsyncStorageInfra } from "../../../infra/async-storage";
import { Axios } from "../../../infra/axios";

export const makeSearchUserService = (): SearchUserService => {
    const axios = new Axios('searchUser')
    const asyncStorageInfra = new AsyncStorageInfra()
    return new SearchUserService(axios, asyncStorageInfra)
}
import { GetInviteListService } from "../../../data/services/get-invite-list";
import { makeAsyncStorageInfra } from "../infra/async-storage-infra-factory";
import { Axios } from "../../../infra/axios";

export const makeGetInviteListService = (): GetInviteListService => {
    const axios = new Axios('getInviteList')
    return new GetInviteListService(axios, makeAsyncStorageInfra())
}
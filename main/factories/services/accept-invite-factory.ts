import { makeAsyncStorageInfra } from "../infra/async-storage-infra-factory";
import { Axios } from "../../../infra/axios";
import { AcceptInviteService } from "../../../data/services/accept-invite";

export const makeAcceptInviteService = (): AcceptInviteService => {
    const axios = new Axios('acceptInvite')
    return new AcceptInviteService(axios, makeAsyncStorageInfra())
}
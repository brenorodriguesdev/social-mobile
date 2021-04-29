import { makeAsyncStorageInfra } from "../infra/async-storage-infra-factory";
import { Axios } from "../../../infra/axios";
import { RefuseInviteService } from "../../../data/services/refuse-invite";

export const makeRefuseInviteService = (): RefuseInviteService => {
    const axios = new Axios('refuseInvite')
    return new RefuseInviteService(axios, makeAsyncStorageInfra())
}
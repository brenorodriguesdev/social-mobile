import { makeAsyncStorageInfra } from "../infra/async-storage-infra-factory";
import { Axios } from "../../../infra/axios";
import { SendInviteService } from "../../../data/services/send-invite";

export const makeSendInviteService = (): SendInviteService => {
    const axios = new Axios('sendInvite')
    return new SendInviteService(axios, makeAsyncStorageInfra())
}
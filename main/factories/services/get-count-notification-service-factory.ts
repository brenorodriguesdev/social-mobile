import { GetInviteListService } from "../../../data/services/get-invite-list";
import { makeAsyncStorageInfra } from "../infra/async-storage-infra-factory";
import { Axios } from "../../../infra/axios";
import { GetCountNotificationService } from "../../../data/services/get-count-notification";

export const makeGetCountNotificationService = (): GetCountNotificationService => {
    const axios = new Axios('getCountNotification')
    return new GetCountNotificationService(axios, makeAsyncStorageInfra())
}
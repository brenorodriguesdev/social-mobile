import { makeAsyncStorageInfra } from "../infra/async-storage-infra-factory";
import { Axios } from "../../../infra/axios";
import { ViewNotificationService } from "../../../data/services/view-notification";

export const makeViewNotificationService = (): ViewNotificationService => {
    const axios = new Axios('viewNotification')
    return new ViewNotificationService(axios, makeAsyncStorageInfra())
}
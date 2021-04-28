import { AsyncStorageInfra } from "../../../infra/async-storage"

export const makeAsyncStorageInfra = (): AsyncStorageInfra => {
    return new AsyncStorageInfra()
}
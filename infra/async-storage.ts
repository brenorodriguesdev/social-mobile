import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoadAccessToken } from "../data/contracts/load-access-token";

export class AsyncStorageInfra implements LoadAccessToken {
    async load(): Promise<any> {
        const accessToken = await AsyncStorage.getItem('accessToken')
        return accessToken
    }
}
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoadAccessToken } from "../data/contracts/load-access-token";
import { SaveAccessToken } from "../data/contracts/save-access-token";

export class AsyncStorageInfra implements LoadAccessToken, SaveAccessToken {
    async load(): Promise<any> {
        const accessToken = await AsyncStorage.getItem('accessToken')
        return accessToken
    }
    async save(accessToken: string): Promise<void> {
        await AsyncStorage.setItem('accessToken', accessToken)
    }
}
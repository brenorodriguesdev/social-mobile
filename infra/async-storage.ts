import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoadAccessToken, SaveAccessToken } from "../data/contracts";

export class AsyncStorageInfra implements LoadAccessToken, SaveAccessToken {
    async load(): Promise<any> {
        const accessToken = await AsyncStorage.getItem('accessToken')
        return accessToken
    }
    async save(accessToken: string): Promise<void> {
        await AsyncStorage.setItem('accessToken', accessToken)
    }
}
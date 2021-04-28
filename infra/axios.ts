import { HttpClient } from "../data/contracts/http-client";
import { api } from "../main/config/axios";

export class Axios implements HttpClient {

    constructor(private readonly route: string) { }
    async post(body: any, headers?: any): Promise<any> {
        try {
            const response = await api.post(this.route, body, headers)
            return response.data
        } catch (error) {
            return new Error(error.response.data.message)
        }
    }
}
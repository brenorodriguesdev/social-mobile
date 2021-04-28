export interface HttpClient {
    post(body: any, accessToken?: string): Promise<any>
    get(params: any, accessToken?: string): Promise<any>
}
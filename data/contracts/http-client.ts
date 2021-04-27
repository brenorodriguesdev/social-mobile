export interface HttpClient {
    post(body: any, headers?: any): Promise<any>
}
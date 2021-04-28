export interface HttpClient {
    post(body: any, headers?: any): Promise<any>
    get(params: any, headers?: any): Promise<any>
}
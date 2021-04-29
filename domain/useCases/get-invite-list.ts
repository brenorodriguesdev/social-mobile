import { InviteModel } from "../models/invite";

export interface GetInviteListUseCase {
    get(): Promise<InviteModel[]>
}
export interface SendInviteUseCase {
    send(idGuest: number): Promise<void | Error>
}
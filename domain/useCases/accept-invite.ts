export interface AcceptInviteUseCase {
    accept(idConvite: number): Promise<void | Error>
}
export interface RefuseInviteUseCase {
    refuse(idConvite: number): Promise<void | Error>
}
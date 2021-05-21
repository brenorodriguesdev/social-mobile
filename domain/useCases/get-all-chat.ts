import { ChatModel } from '../models/chat';

export interface GetAllChatUseCase {
    get(): Promise<ChatModel[]>
}
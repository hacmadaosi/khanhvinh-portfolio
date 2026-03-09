import { Conversation } from "../schemas/conversation.schema"
import { Message } from "../schemas/message.schema"

export interface MessageState {
    conversation_id: string
    setConversationId: (conversation_id: string) => void
    getAllConversation: (user_id: string) => Conversation[]
    getMessageByConversationId: () => Message[]
}
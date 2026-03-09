import { create } from "zustand";
import { MessageState } from "../types/MessageState";
import { conversations, messages } from "@/lib/data";

export const useMessageStore = create<MessageState>((set, get) => ({
  conversation_id: "",
  setConversationId(conversation_id) {
    set({ conversation_id });
  },

  getAllConversation(user_id) {
    return conversations.filter((e) => e.user_id == user_id);
  },
  getMessageByConversationId() {
    const {conversation_id} = get()
    return messages.filter((el) => el.conversation_id == conversation_id)
  },
}));

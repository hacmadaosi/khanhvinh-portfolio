import {z} from "zod"

export const ConversationSchema = z.object(
    {
        id: z.string(),
        name: z.string(),
        created_at: z.string().datetime(),
        user_id: z.string()
    }
)

export type Conversation = z.infer<typeof ConversationSchema>;
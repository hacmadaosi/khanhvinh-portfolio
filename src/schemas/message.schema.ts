import { z } from "zod";

export const MessageSchema = z.object({
  id: z.string(),
  content: z.string(),
  role_id: z.union([
    z.literal(1), 
    z.literal(2),
    z.literal(3),
  ]),
  created_at: z.string().datetime(),
  conversation_id: z.string(),
  knowledge_by: z.string().optional(),
});

export type Message = z.infer<typeof MessageSchema>;

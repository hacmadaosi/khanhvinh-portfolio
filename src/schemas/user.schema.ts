import {z} from "zod"

export const UserChema = z.object(
    {
        id: z.string(),
        name: z.string(),
        email: z.string().email(),
        password: z.string().optional(),
        gender: z.enum(["Nam", "Nữ"]),
        birth_date: z.string(),
        password_change_at: z.string().datetime(),
        image_url: z.string().url().optional()
    }
)

export type User = z.infer<typeof UserChema>;
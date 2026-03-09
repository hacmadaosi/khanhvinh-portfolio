import {Conversation} from "@/src/schemas/conversation.schema"
import { Message } from "@/src/schemas/message.schema";
import { User } from "@/src/schemas/user.schema";

export const suggestMessage = [
    {
        id: "1",
        content: "Bạn là ai"
    },
    {
        id: "2",
        content: "Giới thiệu về trường Đại học An Giang"
    },
    {
        id: "3",
        content: "Học phí AGU 2026"
    },
  ];
export const users: User[] = [
  {
    id: "123e4567-e89b-12d3-a456-426614174000",
    name: "Nguyen Van A",
    email: "vana@example.com",
    password: "hashed_password_123",
    gender: "Nam",
    birth_date: "2004-10-31",
    password_change_at: "2026-03-09T10:00:00Z",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdq-nCcZo77NkcQQMWcUQAkSv50kTqvTwrdg&s"
  },
  {
    id: "u002",
    name: "Tran Thi B",
    email: "thib@example.com",
    gender: "Nữ",
    birth_date: "2002-05-12",
    password_change_at: "2026-03-08T14:30:00Z",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdq-nCcZo77NkcQQMWcUQAkSv50kTqvTwrdg&s"
  },
  {
    id: "u003",
    name: "Le Van C",
    email: "vanc@example.com",
    password: "hashed_password_456",
    gender: "Nam",
    birth_date: "2000-11-20",
    password_change_at: "2026-03-07T09:15:00Z",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdq-nCcZo77NkcQQMWcUQAkSv50kTqvTwrdg&s"

  }
]

export const conversations: Conversation[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    name: "AI Agent Discussion",
    created_at: "2026-03-08T10:00:00Z",
    user_id: "123e4567-e89b-12d3-a456-426614174000"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "Thesis Planning",
    created_at: "2026-03-08T10:00:00Z",
    user_id: "123e4567-e89b-12d3-a456-426614174000"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    name: "Multi-Agent Architecture",
    created_at: "2026-03-07T14:20:00Z",
    user_id: "123e4567-e89b-12d3-a456-426614174000"
  }
]

export const messages: Message[] = [
  // conversation 1
  {
    id: "m001",
    content: "Xin chào",
    role_id: 3,
    created_at: "2026-03-09T10:00:00Z",
    conversation_id: "550e8400-e29b-41d4-a716-446655440000",
    knowledge_by: ""
  },
  {
    id: "m002",
    content: "Tôi có thể giúp gì cho bạn?",
    role_id: 2,
    created_at: "2026-03-09T10:00:01Z",
    conversation_id: "550e8400-e29b-41d4-a716-446655440000",
    knowledge_by: ""
  },
  {
    id: "m003",
    content: "Hiệu trưởng Đại học An Giang là ai?",
    role_id: 3,
    created_at: "2026-03-09T10:00:02Z",
    conversation_id: "550e8400-e29b-41d4-a716-446655440000",
    knowledge_by: ""
  },
  {
    id: "m004",
    content: "Đang tìm kiếm thông tin...",
    role_id: 1,
    created_at: "2026-03-09T10:00:03Z",
    conversation_id: "550e8400-e29b-41d4-a716-446655440000",
    knowledge_by: "regulation.pdf"
  },
  {
    id: "m005",
    content: "Hiệu trưởng hiện tại là ...",
    role_id: 2,
    created_at: "2026-03-09T10:00:04Z",
    conversation_id: "550e8400-e29b-41d4-a716-446655440000",
    knowledge_by: "regulation.pdf"
  },

  // conversation 2
  {
    id: "m006",
    content: "Tôi muốn hỏi về chương trình đào tạo",
    role_id: 3,
    created_at: "2026-03-08T10:00:00Z",
    conversation_id: "550e8400-e29b-41d4-a716-446655440001",
    knowledge_by: ""
  },
  {
    id: "m007",
    content: "Bạn muốn hỏi ngành nào?",
    role_id: 2,
    created_at: "2026-03-08T10:00:01Z",
    conversation_id: "550e8400-e29b-41d4-a716-446655440001",
    knowledge_by: ""
  },
  {
    id: "m008",
    content: "Công nghệ thông tin",
    role_id: 3,
    created_at: "2026-03-08T10:00:02Z",
    conversation_id: "550e8400-e29b-41d4-a716-446655440001",
    knowledge_by: ""
  },
  {
    id: "m009",
    content: "Đang tra cứu tài liệu...",
    role_id: 1,
    created_at: "2026-03-08T10:00:03Z",
    conversation_id: "550e8400-e29b-41d4-a716-446655440001",
    knowledge_by: "training_program.pdf"
  },
  {
    id: "m010",
    content: "Ngành CNTT có thời gian đào tạo 4 năm.",
    role_id: 2,
    created_at: "2026-03-08T10:00:04Z",
    conversation_id: "550e8400-e29b-41d4-a716-446655440001",
    knowledge_by: "training_program.pdf"
  }
]
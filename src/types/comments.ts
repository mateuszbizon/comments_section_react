export type CommentType = {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: User;
    replies: ReplyType[];
}

export type ReplyType = {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    replyingTo: string;
    user: User;
}

type UserImage = {
    png: string;
    webp: string;
}

type User = {
    image: UserImage;
    username: string;
}
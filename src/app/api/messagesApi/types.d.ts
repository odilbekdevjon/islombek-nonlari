interface User {
    _id: string;
    avatar:string
    branch:string;
    createdAt:string;
    fullName:string;
    password:string
    role:string;
}
export interface GetAllMessagesRequest {}
export type GetAllMessagesResponse = {
    lastMessage: string
    chat: User;
}[]


export type GetMessageRequest = {
    _id: string;
    from: string;
    to: string;
    createdAt: string;
    content: string;
}[]

export interface GetMessageResponse {[]}
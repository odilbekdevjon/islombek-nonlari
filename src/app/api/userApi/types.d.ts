interface User {
    _id:string;
    fullName:string;
    username:string;
    role:string;
    branch:string;
    balance:number;
    avatar:string;
    createdAt:string;
    updatedAt:string;
}

export interface GetUserRequest {}
export interface GetUserResponse {
    user: User[];
}

export interface GetUserByIdRequest {
    id: string;
}

export interface GetUserByIdResponse {[]}
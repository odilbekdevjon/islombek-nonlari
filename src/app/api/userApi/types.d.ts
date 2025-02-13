interface User {
    _id:string;
    fullName:string;
    username:string;
    role:string;
    balance:number;
    createdAt:string;
    updatedAt:string;
    avatar:string;
}

export interface GetUserByIdRequest { id: string;}
export interface GetUserByIdResponse {[]}

export type GetUserRequest  = {}
export type GetUserResponse = {
    _id:string;
    fullName:string;
    username:string;
    role:string;
    balance:number;
    createdAt:string;
    updatedAt:string;
    avatar:string;
}

export type GetAllUsersResponse = {}
export type GetAllUsersRequest = {}

export type ChangePasswordRequest = {
    oldPassword:string;
    newPassword:string;
    confirmPassword:string;
}
export type ChangePasswordResponse  = {};


export type UpdateUserRequest = {
    id:string;
    fullName?:string;
    username?:string;
    password?:string;
    avatar?:string;
}
export type UpdateUserResponse = {}
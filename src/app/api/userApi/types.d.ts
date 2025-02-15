import { ROLES } from "../../../constants";

export interface User {
  _id: string;
  fullName: string;
  username: string;
  role: string;
  balance: number;
  createdAt: string;
  updatedAt: string;
  avatar: string;
}

export type GetUserByIdRequest = string;
export type GetUserByIdResponse = User;

export type GetUserRequest = {};
export type GetUserResponse = User;

export type GetAllUsersResponse = User[];
export type GetAllUsersRequest = {
  roles: ROLES[];
};

export type ChangePasswordRequest = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};
export type ChangePasswordResponse = {};

export type UpdateUserRequest = {
  id: string;
  fullName?: string;
  username?: string;
  password?: string;
  avatar?: string;
};
export type UpdateUserResponse = {};

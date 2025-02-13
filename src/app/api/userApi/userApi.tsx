import { baseApi } from "../baseApi";
import { PATHS } from "./paths";
import { ChangePasswordRequest, ChangePasswordResponse, GetAllUsersRequest, GetAllUsersResponse, GetUserRequest, GetUserResponse, UpdateUserRequest, UpdateUserResponse } from "./types";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSingleUser: builder.query<GetUserResponse, GetUserRequest>({
            query: () => ({
                url: PATHS.SINGLE_USER,
                method: 'GET',
            }),
        }),
        getAllUsers: builder.query<GetAllUsersResponse, GetAllUsersRequest>({
            query: () => ({
                url: PATHS.ALL_USER,
                method: 'GET',
            })
        }),
        updateUserPassword:builder.mutation<ChangePasswordResponse, ChangePasswordRequest>({
            query: (body) => ({
                url: PATHS.USER_PASSWORD,
                method: 'PATCH',
                body,
            }),
        }),
        updateUser:builder.mutation<UpdateUserResponse, UpdateUserRequest>({
            query: (body) => ({
                url:PATHS.USER_ID + body.id,
                method: 'PATCH',
                body,
            })
        })
    }),
})

export const { useGetAllUsersQuery, useGetSingleUserQuery, useUpdateUserPasswordMutation, useUpdateUserMutation } = userApi;
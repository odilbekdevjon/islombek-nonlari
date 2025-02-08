import { baseApi } from "../baseApi";
import { PATHS } from "./paths";
import { GetUserRequest, GetUserResponse, User } from "./types";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query<GetUserResponse, GetUserRequest>({
            query: () => ({
                url: PATHS.ALL,
                method: 'GET',
            }),
        }),
        getSingleUser: builder.query<User, {id:string}> ({
            query: ({id}) => ({
                url: PATHS.USER_ID + id,
                method: 'GET',
            })
        })
    }),
})

export const { useGetAllUsersQuery, useGetSingleUserQuery } = userApi;
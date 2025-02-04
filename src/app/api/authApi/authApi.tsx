import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PATHS } from "./paths";
import { LoginRequest, LoginResponse } from "./types";

export const authApi = createApi({
    reducerPath:'authapi',
    baseQuery:fetchBaseQuery({baseUrl:'https://bakery.the-watcher.uz/'}),
    endpoints:(builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: PATHS.LOGIN,
                method: 'POST',
                body: credentials,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })
    })
})

export const { useLoginMutation } = authApi;
import { baseApi } from "../baseApi";
import { PATHS } from "./paths";
import { GetAllMessagesRequest, GetAllMessagesResponse, GetMessageRequest, GetMessageResponse } from "./types";

export const messagesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllMessages: builder.query<GetAllMessagesResponse, GetAllMessagesRequest>({
            query: () => ({
                url: PATHS.ALL,
                method: 'GET',
            }),
        }),
        getMessage: builder.query<GetMessageResponse, GetMessageRequest> ({
            query: () => ({
                url: PATHS.MESSAGES_ID,
                method: 'GET',
            })
        })
    }),
})

export const { useGetAllMessagesQuery, useGetMessageQuery } = messagesApi;
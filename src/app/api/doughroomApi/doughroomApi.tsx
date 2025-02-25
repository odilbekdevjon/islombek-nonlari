import { baseApi } from "../baseApi";
import { PATHS } from "./paths";
import { GetAllDoughroomsRequest, GetAllDoughroomsResponse, PostDoughroomsRequest, PostDoughroomsResponse } from "./types";

export const doughroomApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllDoughrooms: builder.query<GetAllDoughroomsResponse, GetAllDoughroomsRequest>({
            query: () => ({
                url: PATHS.ALL,
                method: 'GET',
            }),
        }),
        getDoughroom: builder.query({
            query: ({id}) => ({
                url: PATHS.DOUGHROOM_ID + id,
                method: 'GET',
            })
        }),
        postDoughroom:builder.mutation<PostDoughroomsResponse, PostDoughroomsRequest>({
            query: (body) => ({
                url: PATHS.POST,
                method: 'POST',
                body,
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
        })
    }),
})

export const { useGetAllDoughroomsQuery, useGetDoughroomQuery } = doughroomApi;

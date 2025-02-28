import { baseApi } from "../baseApi";
import { PATHS } from "./paths";
import { GetAllDoughroomsRequest, GetAllDoughroomsResponse, GetByIdDoughroomRequest, GetByIdDoughroomResponse, PostDoughroomsRequest, PostDoughroomsResponse } from "./types";

export const doughroomApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllDoughrooms: builder.query<GetAllDoughroomsResponse, GetAllDoughroomsRequest>({
            query: () => ({
                url: PATHS.ALL,
                method: 'GET',
            }),
        }),
        getByIdDoughroom: builder.query<GetByIdDoughroomResponse, GetByIdDoughroomRequest>({
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

export const { useGetAllDoughroomsQuery, useGetByIdDoughroomQuery, usePostDoughroomMutation } = doughroomApi;

import { baseApi } from "../baseApi";
import { PATHS } from "./paths";
import { GetAllComplaintsRequest, GetAllComplaintsResponse, GetComplaintRequest, GetComplaintResponse } from "./types";

export const complaintApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllComplaints: builder.query<GetAllComplaintsResponse, GetAllComplaintsRequest>({
            query: () => ({
                url: PATHS.ALL,
                method: 'GET',
            }),
        }),
        getComplaint: builder.query<GetComplaintResponse, GetComplaintRequest> ({
            query: ({id}) => ({
                url: PATHS.COMPLAINT_ID + id,
                method: 'GET',
            })
        })
    }),
})

export const { useGetAllComplaintsQuery, useGetComplaintQuery } = complaintApi;
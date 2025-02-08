import { baseApi } from "../baseApi";
import { PATHS } from "./paths";
import { GetAllNotificationsRequest, GetAllNotificationsResponse, GetNotificationRequest, GetNotificationResponse } from "./types";

export const notificationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllNotifications: builder.query<GetAllNotificationsResponse, GetAllNotificationsRequest>({
            query: () => ({
                url: PATHS.ALL,
                method: 'GET',
            }),
        }),
        getNotification: builder.query<GetNotificationResponse, GetNotificationRequest> ({
            query: ({id}) => ({
                url: PATHS.NOTIFICATION_ID + id,
                method: 'GET',
            })
        })
    }),
})

export const { useGetAllNotificationsQuery, useGetNotificationQuery } = notificationApi;
export interface GetAllNotificationsRequest {
  [];
}
export interface NotificationUser {
  _id: string;
  fullName: string;
  username: string;
  role: string;
  branch: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
  debt: number;
}

export interface GetAllNotificationsResponse {
  _id: string;
  users?: string[];
  status: string;
  type: string;
  from: NotificationUser;
  createdAt: string;
  updatedAt: string;
}

export interface GetNotificationRequest {
  id: string;
}

export interface GetNotificationResponse {
  [];
}

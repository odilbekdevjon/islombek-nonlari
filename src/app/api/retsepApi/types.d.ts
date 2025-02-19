export type GetAllRetsepsRequest = {};
export type GetAllRetsepsResponse = {
  branch: string;
  createdAt: string;
  scope: string;
  title: string;
  updatedAt: string;
  _id: string;
  amount?: number;
};

export interface GetRetsepRequest {
  id: string;
}

export interface GetRetsepResponse {
  [];
}

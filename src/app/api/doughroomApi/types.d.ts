export interface GetAllDoughroomsRequest {}

export interface GetAllDoughroomsResponse extends Array<Doughroom> {}

export interface Doughroom {
  _id: string;
  branch: string;
  title: string;
  image: string;
  warehouse: WarehouseItem[];
  doughs: DoughItem[];
  createdAt: string;
  updatedAt: string;
}

export interface WarehouseItem {
  ingradient: Ingradient;
  count: number;
  cost: number;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface Ingradient {
  _id: string;
  title: string;
  scope: string;
}

export interface DoughItem {
  count: number;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostDoughroomsRequest {
  doughroom: string | null;
  count: number;
}

export interface PostDoughroomsResponse {
  count: number;
  sent: number;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetByIdDoughroomRequest {
  id: string;
}
export interface GetByIdDoughroomResponse {
  doughs: Doughroom[];
  warehouse: WarehouseItem[];
}

export type RouteDTO = {
  driverId?: string;
};

export type AssignRoute = {
  driverId: string;
  id: string;
};

export interface UpdateStatus {
  status: Status;
  id: string;
}

export type RouteResponse = {
  id: string;
  status: string;
  driverId: string | null;
  createdAt: Date;
  deliveries?: [];
};
export type Status = 'OPEN' | 'IN_PROGRESS' | 'CLOSED' | 'CANCELLED';

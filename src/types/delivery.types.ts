export interface DeliveryDTO {
  recipientName: string;
  recipientPhone: number;
  address: string;
  city: string;
  zipCode: number;
  weight: number;
  code: string;
  status: string;
  routeId: string | null;
}

export interface DeliveryResponse {
  id: string;
  recipientName: string;
  recipientPhone: number;
  address: string;
  city: string;
  zipCode: number;
  weight: number;
  code: string;
  routeId: string | null;
  status: string;
  createdAt: Date;
  updatedAt: Date;

  deliveryHistory?: [];
}

export interface UpdateDeliveryStatus {
  id: string;
  status: DeliveryStatus;
}
export type UpdateDeliveryDTO = Partial<DeliveryDTO>;

export type DeliveryStatus = 'PENDING' | 'IN_ROUTE' | 'DELIVERED' | 'REFUSED';

export type CreateDelivery = Omit<DeliveryDTO, 'id' | 'code'>;

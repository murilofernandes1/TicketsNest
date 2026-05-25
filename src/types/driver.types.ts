export type DriverDTO = {
  name: string;
  email: string;
  password: string;
  licensePlate: string;
  phone: number;
};

export type DriverResponse = {
  id: string;
  name: string;
  email: string;
  password: string;
  licensePlate: string;
  phone: number;
  createdAt: Date;
  updatedAt: Date;
};

export type Status = {
  status: 'ACTIVE' | 'INACTIVE';
};

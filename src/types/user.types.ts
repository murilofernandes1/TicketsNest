export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
  type: UserTypes;
};

export type UserResponse = {
  id: string;
  name: string;
  email: string;
  role: Role[];
};

export type UpdateRole = {
  id: string;
  role: Role;
};

export type UserRoles = UserResponse & {
  role: 'ADMIN' | 'USER';
};

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
export enum UserTypes {
  USER = 'USER',
  DRIVER = 'DRIVER',
}

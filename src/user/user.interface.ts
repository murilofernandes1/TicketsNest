import { Role, UserResponse } from './user.types.js';

export abstract class UserInterface {
  abstract updateUserRole(id: string, role: Role): Promise<Role>;
  abstract getMe(id: string): UserResponse;
}

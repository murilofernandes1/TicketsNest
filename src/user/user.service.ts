import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import type { UserRoles, UserResponse } from '../types/user.types.js';
import { UserInterface } from './user.interface.js';

@Injectable()
export class UserService {
  constructor(
    @Inject('IUserRepository')
    private readonly userInterface: UserInterface,
  ) {}

  async updateUserRole(id: string, role: UserRoles) {
    if (!role) {
      throw new BadRequestException();
    }
    const updatedRole = await this.userInterface.updateUserRole(id, role);
    return updatedRole;
  }

  async getMe(id: string) {
    const me = await this.userInterface.getMe(id);
    return me;
  }
}

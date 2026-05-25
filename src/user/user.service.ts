import { Inject, Injectable } from '@nestjs/common';
import type { Role, UserResponse } from './user.types.js';
import { UserInterface } from './user.interface.js';
@Injectable()
export class UserService {
  constructor(
    @Inject('IUserRepository')
    private readonly userInterface: UserInterface,
  ) {}

  async updateUserRole(id: string, role: Role) {
    if (!role) {
      throw new Error('Invalid fields');
    }
    await this.userInterface.updateUserRole(id, role);
    return 'Role updated with success.';
  }

  async getMe(id: string) {
    const me = await this.userInterface.getMe(id);
    return me;
  }
}

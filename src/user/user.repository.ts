import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../core/prisma/prisma.service.js';
import { Role, UserRoles } from './user.types.js';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async updateUserRole(id: string, role: UserRoles) {
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: {
        role: role.role,
      },
    });
    return updatedUser;
  }

  async getMe(id: string) {
    const me = await this.prisma.user.findUnique({
      where: { id },
      omit: { password: true },
    });
    return me;
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/core/prisma/prisma.service.js';
import type { AdminResponse } from '../../common/types/admin.types.js';
import { AdminInterface } from './admin.interface.js';

@Injectable()
export class AdminRepository implements AdminInterface {
  constructor(private readonly prisma: PrismaService) {}

  async getMe(id: string): Promise<AdminResponse> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user as unknown as AdminResponse;
  }
}

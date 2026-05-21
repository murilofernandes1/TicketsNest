import { Injectable } from '@nestjs/common';
import { PrismaService } from '../core/prisma/prisma.service.js';
import { SignUpDTO, UserResponse } from './auth.types.js';

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: SignUpDTO): Promise<SignUpDTO> {
    return this.prisma.user.create({ data });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}

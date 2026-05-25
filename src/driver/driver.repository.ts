import { Injectable } from '@nestjs/common';
import { PrismaService } from '../core/prisma/prisma.service.js';
import type { DriverDTO, DriverResponse } from '../types/driver.types.js';

@Injectable()
export class DriverRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: DriverDTO): Promise<DriverDTO> {
    return this.prisma.driver.create({ data });
  }

  async findDriverByEmail(email: string) {
    return this.prisma.driver.findUnique({
      where: {
        email: email,
      },
    });
  }
}

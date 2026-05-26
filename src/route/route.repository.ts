import { Injectable } from '@nestjs/common';
import { RouteInterface } from './route.interface.js';
import { PrismaService } from '../core/prisma/prisma.service.js';
import {
  AttributeRoute,
  RouteDTO,
  RouteResponse,
  UpdateStatus,
} from '../types/route.types.js';

@Injectable()
export class RouteRepository implements RouteInterface {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: RouteDTO): Promise<RouteResponse> {
    return this.prisma.route.create({
      data: { driverId: data.driverId },
    });
  }

  async seeRoute(id: string): Promise<RouteResponse | null> {
    return this.prisma.route.findUnique({
      where: { id: id },
    });
  }

  async allRoutes(): Promise<RouteResponse[] | null> {
    return this.prisma.route.findMany();
  }

  async attributeRoute(data: AttributeRoute): Promise<RouteResponse> {
    return this.prisma.route.update({
      where: { id: data.id },
      data: { driverId: data.driverId },
    });
  }

  async updateStatus(data: UpdateStatus): Promise<RouteResponse> {
    return this.prisma.route.update({
      where: { id: data.id },
      data: { status: data.status },
    });
  }

  async deleteRoute(id: string) {
    return this.prisma.route.delete({
      where: {
        id: id,
      },
    });
  }
}

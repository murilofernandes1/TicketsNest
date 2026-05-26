import { Body, Controller, Param, Post, Get, Patch } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard.js';
import { RolesGuard } from '../guards/role.guard.js';
import { TypeGuard } from '../guards/type.guard.js';
import { Roles } from '../decorators/role.decorator.js';
import { RouteService } from './route.service.js';
import type {
  AttributeRoute,
  RouteDTO,
  Status,
  UpdateStatus,
} from '../types/route.types.js';

@Controller('route')
@UseGuards(AuthGuard, RolesGuard, TypeGuard)
export class RouteController {
  constructor(private routeService: RouteService) {}

  @Post('create')
  async create(@Body() body: RouteDTO) {
    return this.routeService.create(body);
  }

  @Get('/:id')
  async getRoute(@Param('id') id: string) {
    return this.routeService.seeRoute(id);
  }

  @Get('/')
  async allRoutes() {
    return this.routeService.allRoutes();
  }

  @Patch('/:id/status')
  async updateStatus(
    @Param('id') id: UpdateStatus['id'],
    @Body() body: { status: UpdateStatus['status'] },
  ) {
    return this.routeService.updateStatus({ id, status: body.status });
  }

  @Patch('/:id/attribute')
  async attributeRoute(
    @Param('id') id: AttributeRoute['id'],
    @Body() body: { driverId: AttributeRoute['driverId'] },
  ) {
    return this.routeService.attributeRoute({ id, driverId: body.driverId });
  }
}

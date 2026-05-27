import {
  Body,
  Controller,
  Param,
  Post,
  Get,
  Patch,
  Delete,
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../common/guards/auth.guard.js';
import { TypeGuard } from '../../common/guards/type.guard.js';
import { RouteService } from './route.service.js';
import { CurrentUser } from '../../common/decorators/user.decorator.js';
import { UpdateStatus } from '../../common/types/route.types.js';
import { Types } from '../../common/decorators/type.decorator.js';

@Controller('driver/routes')
@UseGuards(AuthGuard, TypeGuard)
@UseGuards(AuthGuard)
@Types('DRIVER')
export class RouteDriverController {
  constructor(private routeService: RouteService) {}

  @Get('/:id')
  async getRoute(@Param('id') id: string) {
    return this.routeService.seeRoute(id);
  }

  @Get('/')
  async myRoutes(@CurrentUser('id') id: string) {
    return this.routeService.myRoutes(id);
  }

  @Patch('/:id/status')
  async updateRouteStatus(
    @Param('id') id: UpdateStatus['routeId'],
    @Body() body: { status: UpdateStatus['status'] },
  ) {
    return this.routeService.updateStatus({ routeId: id, status: body.status });
  }
}

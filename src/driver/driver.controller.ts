import { Body, Controller, Post } from '@nestjs/common';
import { DriverService } from './driver.service.js';
import type { DriverDTO } from '../types/driver.types.js';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard.js';
import { RolesGuard } from '../guards/role.guard.js';
import { TypeGuard } from '../guards/type.guard.js';
import { Types } from '../decorators/type.decorator.js';
import { UserTypes } from '../types/user.types.js';
import { Roles } from '../decorators/role.decorator.js';
import { Role } from '../types/user.types.js';

@Controller('driver')
@UseGuards(AuthGuard, RolesGuard, TypeGuard)
export class DriverController {
  constructor(private driverService: DriverService) {}

  //@Types(UserTypes.USER)
  @Roles(Role.ADMIN)
  @Post('create')
  async create(@Body() body: DriverDTO) {
    return this.driverService.create(body);
  }
}

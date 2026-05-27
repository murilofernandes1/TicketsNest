import { Body, Controller, Param, Post, Get } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { DriverService } from './driver.service.js';
import type { DriverDTO } from '../../common/types/driver.types.js';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../common/guards/auth.guard.js';
import { TypeGuard } from '../../common/guards/type.guard.js';
import { Types } from '../../common/decorators/type.decorator.js';

@ApiTags('Drivers')
@ApiBearerAuth()
@Controller('admin/drivers')
@UseGuards(AuthGuard, TypeGuard)
@UseGuards(AuthGuard)
@Types('USER')
export class DriverAdminController {
  constructor(private readonly driverService: DriverService) {}

  @Post('create')
  async create(@Body() body: DriverDTO) {
    return this.driverService.create(body);
  }

  @Get('/:id')
  async getDriver(@Param('id') id: string) {
    return this.driverService.getDriver(id);
  }

  @Get('/')
  async allDrivers() {
    return this.driverService.allDrivers();
  }
}

import {
  Controller,
  Body,
  Get,
  Patch,
  UseGuards,
  Param,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard.js';
import { AdminService } from './admin.service.js';
import { CurrentUser } from '../decorators/user.decorator.js';
import { Roles } from '../decorators/role.decorator.js';
import { RolesGuard } from '../guards/role.guard.js';
import type { AdminRoles, AdminResponse } from '../types/admin.types.js';

@Controller('admin')
@UseGuards(AuthGuard, RolesGuard)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('me')
  @HttpCode(HttpStatus.OK)
  async me(@CurrentUser('id') id): Promise<AdminResponse> {
    return this.adminService.getMe(id);
  }

  @Roles('ADMIN')
  @Patch(':id/role')
  @HttpCode(HttpStatus.OK)
  async updateAdminRole(@Param('id') id: string, @Body() body: AdminRoles) {
    return this.adminService.updateAdminRole(id, body);
  }
}

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
import { UserService } from './user.service.js';
import { Role } from './user.types.js';
import type { UserResponse } from './user.types.js';
import { CurrentUser } from '../decorators/user.decorator.js';
import { Roles } from '../decorators/role.decorator.js';

@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @HttpCode(HttpStatus.OK)
  async me(@CurrentUser('id') id): Promise<UserResponse> {
    return this.userService.getMe(id);
  }

  @Roles(Role.ADMIN)
  @Patch(':id/role')
  @HttpCode(HttpStatus.OK)
  async updateUserRole(@Param('id') id: string, @Body() body: Role) {
    return this.userService.updateUserRole(id, body);
  }
}

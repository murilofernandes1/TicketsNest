import { Module } from '@nestjs/common';
import { UserController } from './user.controller.js';
import { UserRepository } from './user.repository.js';
import { UserService } from './user.service.js';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '../guards/role.guard.js';
import { AuthGuard } from '../guards/auth.guard.js';

@Module({
  providers: [
    UserService,
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    UserRepository,
  ],
  controllers: [UserController],
})
export class UserModule {}

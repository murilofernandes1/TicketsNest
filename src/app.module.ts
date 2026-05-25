import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module.js';
import { PrismaService } from './core/prisma/prisma.service.js';
import { PrismaModule } from './core/prisma/prisma.module.js';
import { UserModule } from './user/user.module.js';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/role.guard.js';

@Module({
  imports: [AuthModule, PrismaModule, UserModule],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}

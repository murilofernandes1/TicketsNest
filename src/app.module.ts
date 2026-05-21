import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module.js';
import { PrismaService } from './core/prisma/prisma.service.js';
import { UserModule } from './user/user.module.js';
import { PrismaModule } from './core/prisma/prisma.module.js';

@Module({
  imports: [AuthModule, UserModule, PrismaModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

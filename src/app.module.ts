import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module.js';
import { PrismaService } from './core/prisma/prisma.service.js';
import { PrismaModule } from './core/prisma/prisma.module.js';
import { UserModule } from './user/user.module.js';
import { DriverModule } from './driver/driver.module.js';
import { RouteModule } from './route/route.module.js';
import { DeliveryModule } from './delivery/delivery.module.js';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    UserModule,
    DriverModule,
    RouteModule,
    DeliveryModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}

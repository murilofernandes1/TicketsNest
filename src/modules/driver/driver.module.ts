import { Module, forwardRef } from '@nestjs/common';
import { DriverService } from './driver.service.js';
import { DriverRepository } from './driver.repository.js';
import { DriverAdminController } from './driver-admin.controller.js';
import { DriverController } from './driver-driver.controller.js';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../../common/guards/auth.guard.js';
import { CryptoModule } from '../../common/core/crypto/crypto.module.js';
import { RouteModule } from '../route/route.module.js';

@Module({
  imports: [CryptoModule, forwardRef(() => RouteModule)],
  providers: [
    DriverService,
    {
      provide: 'IDriverRepository',
      useClass: DriverRepository,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },

    DriverRepository,
  ],
  controllers: [DriverController, DriverAdminController],
  exports: [DriverService, 'IDriverRepository'],
})
export class DriverModule {}

import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { AdminInterface } from './admin.interface.js';

@Injectable()
export class AdminService {
  constructor(
    @Inject('IAdminRepository')
    private readonly adminInterface: AdminInterface,
  ) {}

  async getMe(id: string) {
    const me = await this.adminInterface.getMe(id);
    return me;
  }
}

import { AdminResponse } from '../../common/types/admin.types.js';

export abstract class AdminInterface {
  abstract getMe(id: string): Promise<AdminResponse>;
}

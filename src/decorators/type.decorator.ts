import { SetMetadata } from '@nestjs/common';
import { UserTypes } from '../types/user.types.js';

export const TYPES_KEY = 'type';
export const Types = (...type: UserTypes[]) => SetMetadata(TYPES_KEY, type);

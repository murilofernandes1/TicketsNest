import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserTypes } from '../types/user.types.js';
import type { User } from '../types/user.types.js';
import { TYPES_KEY } from '../decorators/type.decorator.js';

@Injectable()
export class TypeGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredTypes = this.reflector.getAllAndOverride<UserTypes[]>(
      TYPES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredTypes) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user: User = request.user;

    return user && requiredTypes.includes(user.type);
  }
}

import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDTO, SignUpDTO, UserResponse } from './auth.types.js';
import { JwtService } from '@nestjs/jwt';
import { AuthInterface } from './auth.interface.js';
import { CryptoInterface } from '../core/crypto/crypto.interface.js';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @Inject('IAuthRepository')
    private readonly authInterface: AuthInterface,
    private readonly cryptoInterface: CryptoInterface,
  ) {}

  //SIGN-IN SERVICE

  async signup(signUp: SignUpDTO) {
    if (!signUp) {
      throw new Error('Fields cannot be empty.');
    }
    const userAlreadyExists = await this.authInterface.findByEmail(
      signUp.email,
    );

    if (userAlreadyExists) {
      throw new UnauthorizedException('User already exists.');
    }

    const hashPassword = await this.cryptoInterface.hash(signUp.password);

    const user = await this.authInterface.create({
      name: signUp.name,
      email: signUp.email,
      password: hashPassword,
    });
    return user;
  }

  //SIGN-UP SERVICE

  async signin(signIn: SignInDTO) {
    if (!signIn) {
      throw new Error('Fields cannot be empty.');
    }
    const user = await this.authInterface.findByEmail(signIn.email);

    if (!user) {
      throw new UnauthorizedException('User already exists.');
    }

    const isPasswordMatch = await this.cryptoInterface.compare(
      signIn.password,
      user.password,
    );
    if (!isPasswordMatch) {
      throw new UnauthorizedException('Invalid password.');
    }

    const acessToken = await this.jwtService.signAsync({
      id: user.id,
      email: user.email,
      name: user.name,
    });

    return acessToken;
  }
}

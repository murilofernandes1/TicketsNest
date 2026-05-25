import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from '../types/auth.types.js';
import { JwtService } from '@nestjs/jwt';
import { AuthInterface } from './auth.interface.js';
import { CryptoInterface } from '../core/crypto/crypto.interface.js';
import { compare } from 'bcrypt';
import { DriverInterface } from '../driver/driver.interface.js';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,

    @Inject('IAuthRepository')
    private readonly authInterface: AuthInterface,

    @Inject('IDriverRepository')
    private readonly driverInterface: DriverInterface,

    private readonly cryptoInterface: CryptoInterface,
  ) {}

  //SIGN-UP SERVICE
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

  //SIGN-IN SERVICE
  async signin(signIn: SignInDTO) {
    if (!signIn) {
      throw new Error('Fields cannot be empty.');
    }
    const user = await this.authInterface.findByEmail(signIn.email);

    if (!user) {
      throw new Error('User not found.');
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
      role: user.role,
      type: 'USER',
    });

    return acessToken;
  }

  //DRIVER SIGN-IN
  async driverSignIn(driverSignIn: SignInDTO) {
    if (!driverSignIn) {
      throw new Error('Fields cannot be empty.');
    }
    const driver = await this.driverInterface.findDriverByEmail(
      driverSignIn.email,
    );

    if (!driver) {
      throw new Error('User not found.');
    }

    const isPasswordMatch = await this.cryptoInterface.compare(
      driverSignIn.password,
      driver.password,
    );

    if (!isPasswordMatch) {
      throw new UnauthorizedException('Invalid password');
    }

    const acessToken = await this.jwtService.signAsync({
      id: driver.id,
      email: driver.email,
      name: driver.name,
      type: 'DRIVER',
    });

    return acessToken;
  }
}

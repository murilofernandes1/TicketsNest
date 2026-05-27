import { ApiProperty } from '@nestjs/swagger';
export class Admin {
  id: string;
  @ApiProperty({ example: 'Nome do Admin' })
  name: string;
  @ApiProperty({ example: 'admin@email.com' })
  email: string;
  type: 'ADMIN';
}

export class AdminResponse {
  id: string;
  name: string;
  email: string;
}

export type SignUpDTO = {
  name: string;
  email: string;
  password: string;
};

export type SignInDTO = {
  email: string;
  password: string;
};

export class UserResponse {
  id: string;
  name: string;
  email: string;
  password: string;
}

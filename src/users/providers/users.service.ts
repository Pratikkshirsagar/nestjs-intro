import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-user-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  public findAll(
    getUserParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();

    if (!isAuth) {
      return;
    }

    return [
      {
        firstName: 'Pratik',
        email: 'pratik@gmail.com',
      },
      {
        firstName: 'Akshay',
        email: 'akshay@gmail.com',
      },
    ];
  }

  public findOneById(id: string) {
    return {
      id: 123,
      firstName: 'Pratik',
      email: 'pratik@gmail.com',
    };
  }
}

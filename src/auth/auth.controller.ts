import {
  Controller,
  Post,
  Body,
  Get,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from './auth.guard';
import { Roles } from './auth.decorator';
import { Role } from './entities/role.enum';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @Roles(Role.ADMIN)
  register(@Body() userObject: RegisterAuthDto) {
    return this.authService.register(userObject);
  }

  @Post('login')
  login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }

  @Get('profile')
  @UseGuards(AuthGuard)
  getProfile(@Request() req: any) {
    return req.user;
  }
}

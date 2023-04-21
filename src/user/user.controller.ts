import { Controller, Post, UseGuards, Request, Body, Get  } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto, LoginUserDto } from './dto/user.dto';


@ApiTags("Auth")
@Controller('user')
export class UserController {

    constructor(private readonly userService : UserService){}

    @Post('register')
    async register(@Body() createUserDto : CreateUserDto){
        return this.userService.register(createUserDto);
    }

    @Post('login')
    async login(@Body() user : LoginUserDto) {
        return this.userService.login(user);
    }

    @Post('logout')
    logout(){
        return this.userService.logout();
    }

    @Get('profile')
    @UseGuards(AuthGuard('jwt'))
    getProfile(@Request() req : Request){ 
        return this.userService.getProfile(req);
    }




    


}

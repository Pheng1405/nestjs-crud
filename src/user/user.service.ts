import { HttpException, HttpStatus, Injectable, Request, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, LoginUserDto, UserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user';
import { LocalStrategy } from './strategy/local.strategy';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class UserService {
  

    constructor(
        @InjectRepository(User) private readonly userRepository : Repository<User>,
        private readonly jwtService : JwtService,
        private readonly localStrategy: LocalStrategy,
        
    ){}

    async register(createUserDto : CreateUserDto){
        try{
            const user = await this.userRepository.save({...createUserDto, access_token : this.getToken(createUserDto)});
            return user;
        }
        catch(e){
            throw new HttpException(
                "Username is already existed",
                HttpStatus.CONFLICT
            );
        }
        
    }

    
    async login(loginUserDto : LoginUserDto){
        const user  = await this.localStrategy.validate(loginUserDto.username, loginUserDto.password);

        if(!user){
            throw new BadRequestException('User does not exist');
        }

        const userProfile = await this.userRepository.findOne({where:{username : user.username}});
        
        if(userProfile) {
            userProfile.access_token = this.getToken(user);
        }
        
        delete userProfile.password;
        
        return userProfile;
    }

    logout(){
        return "Logout route";
    }


    getProfile(req : any){
        const user = req.user;

        delete user.password;
        delete user.refresh_token;
        
        return user;
    }


    public getToken(user) : string{
        console.log(user);
        return this.jwtService.sign({
            username : user.username,
            sub : user.id
        })
    }



    // async getTokens(userId: string, username: string) {
    //     const [accessToken, refreshToken] = await Promise.all([
    //       this.jwtService.signAsync(
    //         {
    //           sub: userId,
    //           username,
    //         },
    //         {
    //           secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
    //           expiresIn: '15m',
    //         },
    //       ),
    //       this.jwtService.signAsync(
    //         {
    //           sub: userId,
    //           username,
    //         },
    //         {
    //           secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
    //           expiresIn: '7d',
    //         },
    //       ),
    //     ]);
}

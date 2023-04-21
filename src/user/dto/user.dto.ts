import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { Unique } from "typeorm";

export class CreateUserDto{

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public username : string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public first_name : string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public last_name : string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public password : string;
} 

export class LoginUserDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public username : string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public password : string;

}


export class UserDto{

    @ApiProperty()
    @IsNotEmpty()
    // @IsString()
    public id : string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public username : string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public first_name : string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public last_name : string;


} 


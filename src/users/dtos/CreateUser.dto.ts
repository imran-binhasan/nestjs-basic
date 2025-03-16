import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    userName:string;
    
    @IsEmail()
    email:string;

    
}

    
import { IsEmail, IsString } from "class-validator";


export class UpdateEmployeeDto{

    @IsString()
    name?: string;

    @IsEmail()
    email?: string;

    @IsString()
    dob?:string;

    @IsString()
    phone?: string;
}
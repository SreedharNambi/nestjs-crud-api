import { IsDate, IsDateString, IsEmail, IsNumber, IsString, Max, Min } from "class-validator";
import dayjs from "dayjs";

export class CreateCandidateDto{

    @IsString()
    name:string;

    @IsString()
    mobile:string;

    @IsEmail()
    email:string;

    @IsDateString()
    // @Min(Date.now()) /// Added min Date.Now() but date is displayed in milliseconds in error message
    joiningDate: Date;

    @IsNumber()
    @Min(20) @Max(50)
    age:number;
}





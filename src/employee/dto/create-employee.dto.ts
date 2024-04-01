import { IsDate, IsEmail, IsNumber, IsString } from "class-validator";

export class CreateEmployeeDto{

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    phone:string;

    @IsString()
    dob: string;

    @IsNumber()
    id: number;

    @IsString()
    createdOn?: string;

    @IsString()
    updatedOn?: string;

    @IsString()
    createdBy?: string;

    @IsString()
    updatedBy?: string;
}

export class EmployeeDto{

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    phone:string;

    @IsString()
    dob: string;

    @IsNumber()
    id: number;

    @IsDate()
    createdOn: string;

    @IsDate()
    updatedOn: string;

    @IsString()
    createdBy: string;

    @IsString()
    updatedBy: string;

    constructor(data:any){
        Object.keys(data).map(key=>this[key]=data[key]);
    }
}
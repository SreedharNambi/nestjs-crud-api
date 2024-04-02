import { Type } from "class-transformer";
import { IsArray, IsEmail, IsNumber, IsString, ValidateNested } from "class-validator";


export class CandidateResponseDto{

    @IsArray()
    @Type((item)=>CandidateDto)
    @ValidateNested()
    data:CandidateDto[]=[];

    @IsNumber()
    total:number =0;

    @IsNumber()
    offset:number=0;
}


export class CandidateDto {

    @IsString()
    candidateId: string;

    @IsString()
    name:string;

    @IsString()
    mobile:string;

    @IsEmail()
    email:string;

    @IsNumber()
    age:number;

    @IsString()
    joiningDate:string;

    // constructor(data){
    //     Object.keys(data).map(key=>this[key]=data[key]);
    // }

}
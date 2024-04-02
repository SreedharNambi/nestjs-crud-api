import { BadRequestException, Injectable, Query } from '@nestjs/common';
import { CandidateEntity } from 'src/model/candidate.entity';
import { EntityManager } from 'typeorm';
import { CandidateDto, CandidateResponseDto } from './dto/candidate-response.dto';
import { CreateCandidateDto } from './dto/create-candidate.dto';

@Injectable()
export class CandidateService {
    constructor(private entityManager: EntityManager){}


    async createCandidateProfile(data:CreateCandidateDto){
        let e:any ={...data};
        let candidate = new CandidateEntity(e);
        await this.entityManager.save(candidate);
        return candidate;
    }

    async getAllCandidates(limit:number, offset:number):Promise<CandidateResponseDto>{
        const response: CandidateResponseDto = new CandidateResponseDto();
        const data = await this.entityManager.find(
            CandidateEntity,
            {
            skip:offset,
            take:limit,
            order:{
                name:'ASC',
                age:'DESC',
            }});
        response.data = data.map((item)=>{
            let candidate = new CandidateDto();
             ['name','age','mobile','email','joiningDate','createdDate','updatedDate'].map((key)=> candidate[key] =item[key]);
             return candidate;
        } );
        response.offset=offset;
        response.total = await this.entityManager.count(CandidateEntity);
        return response;
    }

    async searchCandidate(email?:string, mobile?: string):Promise<CandidateDto> {
        const res:CandidateDto= new CandidateDto();
        let candidate;
        if(email) candidate= await this.entityManager.findOneBy(CandidateEntity,{email});
        if(mobile) candidate= await this.entityManager.findOneBy(CandidateEntity,{mobile});
        if(!candidate) throw new BadRequestException('Could not find candidate');
        ['name','age','mobile','email','joiningDate','createdDate','updatedDate'].map((key)=> res[key] =candidate[key]);
        return res;
    }
   
}

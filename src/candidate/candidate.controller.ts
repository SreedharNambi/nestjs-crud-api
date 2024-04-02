import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { CandidateDto, CandidateResponseDto } from './dto/candidate-response.dto';

@Controller('candidate')
export class CandidateController {

    constructor(private readonly candidateService: CandidateService){}

    //Create candidate profile
    @Post()
    async createCandidateProfile(@Body() data:CreateCandidateDto): Promise<any>{
        return await this.candidateService.createCandidateProfile(data);

    }

    @Get()
    async getAllCandidates(
        @Query('limit') limit:number,
        @Query('offset') offset:number): Promise<CandidateResponseDto>{
        return await this.candidateService.getAllCandidates(limit || 10,offset || 0);
    }

    @Get('search')
    async searchCandidate(
        @Query('email') email?:string, 
        @Query('mobile') mobile?:string):Promise<CandidateDto>{
        return await this.candidateService.searchCandidate(email || '', mobile || '');
    }


}

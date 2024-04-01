import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEmployeeDto, EmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EntityManager } from 'typeorm';
import { EmployeeEntity} from 'src/employee.entity';
import * as dayjs from 'dayjs';

@Injectable()
export class EmployeeService {


    constructor(private entityManager:EntityManager){}

    async getAllEmployees(): Promise<EmployeeDto[]> {
        let data:EmployeeDto[]=[];
        const d:any = await this.entityManager.find(EmployeeEntity);
        d.map((e)=>{
            let employee = new EmployeeDto(e);
            data.push(employee);
        });
        return data;
    }

    async getEmployee(id:number): Promise<EmployeeDto>{
        let e = await this.entityManager.findOneBy(EmployeeEntity,{id});
        if(!e) throw new BadRequestException(`Employee ${id} not found`);
        return new EmployeeDto(e);
    }

    async addEmployee(data:CreateEmployeeDto):Promise<EmployeeDto>{
        let id = data.id;
        let employee = await this.entityManager.findOneBy(EmployeeEntity,{id});
        if(employee) throw new BadRequestException('Employee already exists');
        data.createdBy = data.name;
        data.updatedBy = data.name;
        data.createdOn = dayjs().format('YYYY-MM-DD hh:mm:ss A');
        data.updatedOn = dayjs().format('YYYY-MM-DD hh:mm:ss A');
        let entity = new EmployeeEntity(data);
        await this.entityManager.save(entity);
        return await this.getEmployee(data.id);
    }

    async updateEmployeeDetails(id:number,data:UpdateEmployeeDto):Promise<EmployeeDto>{
        const employee = await this.entityManager.findOneBy(EmployeeEntity,{id});
        if(!employee) throw new BadRequestException('Employee not found');
        Object.keys(data).map(key=> employee[key]= data[key]!==undefined && data[key].trim().length ? data[key] : employee[key]);
        employee.updatedBy = employee.name;
        employee.updatedOn = dayjs().format('YYYY-MM-DD hh:mm:ss A');
        return new EmployeeDto(employee);
    }

    async removeEmployee(id:number):Promise<String>{
        await this.entityManager.delete(EmployeeEntity,{id});
        return 'Employee removed successfully';
    }
}

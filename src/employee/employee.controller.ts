import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto, EmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService){}


    @Get()
    async getAllEmployees(): Promise<EmployeeDto[]>{
        return this.employeeService.getAllEmployees();
    }

    @Get(':id')
    async getEmployee(@Param('id') id: string):Promise<EmployeeDto>{
        return await this.employeeService.getEmployee(+id);

    }

    @Post()
    async addEmployee(@Body() data: CreateEmployeeDto){
        return await this.employeeService.addEmployee(data);
    }

    @Patch(':id')
    async updateEmployee(@Param('id') id:string, @Body() data:UpdateEmployeeDto):Promise<EmployeeDto>{
        console.log(id);
        return await this.employeeService.updateEmployeeDetails(+id, data);
    }

    @Delete(':id')
    async removeEmployee(@Param('id') id: string):Promise<String>{
        return await this.employeeService.removeEmployee(+id);
    }
}

import { Controller, Get, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeServie: EmployeeService){}

    @Get()
    getEmployee(){
        return this.employeeServie.getAllemployee();
    }

    @Get(':id')
    getEmployeeById(@Param('id') id: string){
        return this.employeeServie.getEmployeeById(Number(id));
    }
}

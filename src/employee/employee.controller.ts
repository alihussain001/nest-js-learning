import { Controller, Get, Param, Query, Search } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService){}

    @Get()
    getEmployee(){
        return this.employeeService.getAllemployee();
    }

    @Get(':id')
    getEmployeeById(@Param('id') id: string){
        return this.employeeService.getEmployeeById(Number(id));
    }
    // @Get('search')
    // getEmployeeByName(@Query ('name') name: string){
    //     return this.employeeService.getEmployeeByName(name);
    // }
    
}

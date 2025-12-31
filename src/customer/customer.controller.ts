import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/customers-dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService){}

    @Get()
    getCustomer(){
        return this.customerService.getCustomer();
    }

    @Post()
    addCustomer(@Body() createCustomerDto:CreateCustomerDto){
        return this.customerService.addCustomer(createCustomerDto);
    }
}

import { Injectable } from '@nestjs/common';
import { Customer } from 'src/customer/interfaces/customers-interfaces';
import { CreateCustomerDto } from './dto/customers-dto';

@Injectable()
export class CustomerService {
    private customers: Customer [] = [];

    getCustomer(){
        return this.customers;
    }

    addCustomer(createCustomerDto: CreateCustomerDto): Customer{
        const newCustomer: Customer ={
            id: Date.now(),
            ...createCustomerDto
        }
        this.customers.push(newCustomer);
        return newCustomer;
    }
}

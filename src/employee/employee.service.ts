import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  private employees = [
    {
      id: 1,
      name: 'Ali Khan',
      status: 'active',
    },
    {
      id: 2,
      name: 'Sara Ahmed',
      status: 'inactive',
    },
    {
      id: 3,
      name: 'Usman Raza',
      status: 'on_leave',
    },
    {
      id: 4,
      name: 'Ayesha Malik',
      status: 'active',
    },
    {
      id: 5,
      name: 'Hamza Siddiqui',
      status: 'terminated',
    },
    {
      id: 6,
      name: 'Fatima Noor',
      status: 'active',
    },
    {
      id: 7,
      name: 'Bilal Hussain',
      status: 'inactive',
    },
    {
      id: 8,
      name: 'Zain Ali',
      status: 'on_leave',
    },
  ];

  getAllemployee() {
    return this.employees;
  }
  getEmployeeById(id:number){
    return this.employees.find((employee) => employee.id === id )
  }
}

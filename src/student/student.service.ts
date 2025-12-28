import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        {id: 1, name: 'John', age: 20},
        {id: 2, name: 'Sarah', age: 21},
        {id: 3, name: 'Mike', age: 19},
    ];

    // get all students
    getAllStudents(){
        return this.students;
    };


    // get students by id
    getStudentsById(id: number){
        const student = this.students.find((s) => s.id === id);
        if(!student) throw new NotFoundException('Student not found!');
        return student;
    };
    
    // create student
    createStudent(data:{name:string; age: number}){
        const newStudent = {
            id: Date.now(),
            ...data,
        };
        this.students.push(newStudent);
        return this.students;
    };

    // update student (PUT) 
    updateStudent(id: number, data:{name:string; age:number}){
        const index = this.students.findIndex((s) => s.id === id);
        if(index === -1) throw new NotFoundException('Student not found');
       this.students[index] = {id, ...data};
       return this.students[index];
    }

    // update student (PATCH)
    patchStudent(id: number, data:Partial<{name:string; age:number}>){
        const student = this.getStudentsById(id)
        Object.assign(student, data);
        return student;
    }

    // Delete student(DELETE)
    deleteStudent(id:number){
        const index = this.students.findIndex((s) => s.id === id);
        if(index === -1) throw new NotFoundException('Student not found');
        const deleted = this.students.splice(index, 1);
        return { message: 'Student Deleted', studnet: deleted[0]};
    }
}

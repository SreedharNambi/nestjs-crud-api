import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class EmployeeEntity{
    @PrimaryGeneratedColumn("uuid")
    employee_id:string;

    @Column()
    id:number; 

    @Column()
    name:string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    createdBy:string;

    @Column()
    dob: string;

    @Column({})
    createdOn:string;

    @Column({})
    updatedOn:string;

    @Column({})
    updatedBy:string;

    constructor(item){
        Object.assign(this, item);
    }

}
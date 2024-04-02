import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class CandidateEntity{

    @PrimaryGeneratedColumn('uuid')
    candidateId:  string;

    @Column()
    name:string;

    @Column()
    joiningDate:string;

    @Column()
    mobile: string;

    @Column()
    email:string;

    @Column()
    age:number;

    @Column({type:'timestamp', default:()=>'CURRENT_TIMESTAMP'})
    createdDate: string;

    @Column({type:'timestamp', default:()=>'CURRENT_TIMESTAMP'})
    updatedDate:string;

    constructor(data:any){
        Object.assign(this, data);
    }
}
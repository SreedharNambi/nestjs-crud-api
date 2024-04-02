import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeEntity} from './model/employee.entity';
import { CandidateController } from './candidate/candidate.controller';
import { CandidateService } from './candidate/candidate.service';
import { CandidateEntity } from './model/candidate.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'postgres',
      entities: [EmployeeEntity, CandidateEntity],
      synchronize: true
    })
  ],
  controllers: [AppController, EmployeeController, CandidateController],
  providers: [AppService, EmployeeService, CandidateService],
})
export class AppModule {}

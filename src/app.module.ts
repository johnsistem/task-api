import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './tasks/controllers/tasks.controller';
import { TaskService } from './tasks/services/tasks.service';


@Module({
  imports: [TaskModule,
    TypeOrmModule.forRoot({

type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'database_task',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  }),
    ],
  controllers: [TasksController],
  
  providers: [TaskService],
})
export class AppModule {}

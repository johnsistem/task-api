import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TaskService } from './services/tasks.service';
import { TasksController } from './controllers/tasks.controller';
import { Task } from './task.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  exports: [TypeOrmModule],
  providers: [TaskService], 
  controllers: [TasksController]
})
export class TaskModule {
  //constructor(private taskService: TaskService) { }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../task.entity';

@Injectable()
export class TaskService {
   constructor(
      @InjectRepository(Task)
      private tasksRepo: Repository<Task>,
   ) { }

  
  
   findAll() {
    return this.tasksRepo.find()

   }
   createTask(body:any) {
      const newtask = new Task;
      newtask.name = body.name;
      newtask.description = body.description;
      this.tasksRepo.save(newtask);
      return true;
   }


}


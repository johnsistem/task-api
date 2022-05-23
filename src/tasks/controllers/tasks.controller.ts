import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from '../services/tasks.service'

@Controller('api/tasks')
export class TasksController {
   constructor(private taskService: TaskService) { }

   @Get()
   getAll() {
      return this.taskService.findAll()
   }

   @Get(':id')
   getOne(@Param('id') id:number) {
      return id;
   }

   @Post()
   createOne(@Body() body): any {
      return body;
   }

   @Put(':id')
   updateOne(@Param('id') id:number,@Body() body:any ) {
      return body;
   }

   @Delete(':id')
   delete(@Param('id') id:number) {
      return true;
   }






}


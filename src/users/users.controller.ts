import { Controller,Param, Body, Post, Get, Patch, Delete } from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto'
import {UpdateUserDto} from './dto/update-user.dto'
import {UsersService} from './users.service'
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto){
        return this.usersService.createUser(createUserDto)
    }

    @Get()
    async getNotes() {
      return this.usersService.getUsers();
    }
  
    @Get(':id')
    async getNote(@Param('id') id: string) {
      return this.usersService.getUser(id);
    }
  
    @Patch(':id')
    async updateNote(
      @Param('id') id: string,
      @Body() updateNoteDto: UpdateUserDto,
    ) {
      return this.usersService.updateUser(id, updateNoteDto);
    }
  
    @Delete(':id')
    async deleteNote(@Param('id') id: string) {
      return this.usersService.deleteUser(id);
    }
}

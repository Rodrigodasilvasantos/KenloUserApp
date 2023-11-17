import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { IUsers } from './users.model'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('Users') private readonly usersModel: Model<IUsers>
    ) {}

    async createUser(payload: CreateUserDto){
        payload.answer = ""
        const createdUsers = new this.usersModel(payload)
        const result = await createdUsers.save()
        return result
    } 

    async getUsers( ){
        const users = await this.usersModel.find()
        return users
    }

    async getUser(id: string){
        const user = await this.usersModel.findById(id)
        return user
    }

    async updateUser(id: string, payload: UpdateUserDto) {
        const update = await this.usersModel.findByIdAndUpdate(id,
            payload, {
                new: true,
            })

        if (!update){
            throw new NotFoundException("User not found")
        }

        return update
    }

    async deleteUser(id:string) {
        const deleted = `The id: ${id} is deleted`
         await this.usersModel.findByIdAndDelete(id);

        return deleted
    }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { UsersModule } from './users/users.module';
// import { ChatgptService } from './chatgpt/chatgpt.service';
// import { ChatgptController } from './chatgpt/chatgpt.controller';
// import { ChatgptModule } from './chatgpt/chatgpt.module';



//EYEqqCcTFzozl8PE

const uri = 'mongodb+srv://rodrigodslvasantos:EYEqqCcTFzozl8PE@cluster0.79v6odd.mongodb.net/?retryWrites=true&w=majority'
@Module({
  imports: [MongooseModule.forRoot(uri), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

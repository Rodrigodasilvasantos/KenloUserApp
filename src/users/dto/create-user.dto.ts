import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsEmail} from 'class-validator'

export class CreateUserDto {
    @ApiProperty({example: 'test'})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({example: 'test@testing.com'})
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({example: 123456789})
    @IsNotEmpty()
    @IsNumber()
    phone: string;

    answer: string;
}
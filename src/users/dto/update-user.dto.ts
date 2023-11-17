import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateUserDto  {
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

    @ApiProperty({example: 'Test answer for chatgpt integration'})
    answer: string;

}

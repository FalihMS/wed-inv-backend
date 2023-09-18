import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateGuestDto {
    
    @IsNumberString()
    phoneNo: string

    @IsEmail()
    email: string
    
    name: string
    
    position?: string
}

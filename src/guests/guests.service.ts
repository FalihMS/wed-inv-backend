import { Injectable } from '@nestjs/common';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { PrismaService } from 'src/utils/prisma.service';
import { Guest, Prisma } from '@prisma/client';

@Injectable()
export class GuestsService {
  constructor(private prisma: PrismaService) {}

  create(createGuestDto: CreateGuestDto) {
    return this.prisma.guest.create({
      data: createGuestDto
    });
  }

  findAll() {
    return this.prisma.guest.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} guest`;
  }

  update(id: number, updateGuestDto: UpdateGuestDto) {
    return `This action updates a #${id} guest`;
  }

  remove(id: number) {
    return `This action removes a #${id} guest`;
  }
}

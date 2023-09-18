import { Module } from '@nestjs/common';
import { GuestsService } from './guests.service';
import { GuestsController } from './guests.controller';
import { PrismaService } from 'src/utils/prisma.service';

@Module({
  imports:[],
  controllers: [GuestsController],
  providers: [GuestsService, PrismaService]
})
export class GuestsModule {}

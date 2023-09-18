import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GuestsModule } from './guests/guests.module';

@Module({
  imports: [ConfigModule.forRoot(), GuestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

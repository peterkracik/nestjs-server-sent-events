import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NotificationsService } from './notifications.service';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [EventEmitterModule.forRoot()],
  controllers: [AppController],
  providers: [NotificationsService],
})
export class AppModule {}

import { Post, Body, Controller, Param, Sse, Get } from '@nestjs/common';
import { map, fromEvent, Observable, filter } from 'rxjs';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { NotificationsService, Notification } from './notifications.service';
import { EVENT_USER_NOTIFICATION } from './constants';

@Controller()
export class AppController {
  constructor(
    private readonly notificationService: NotificationsService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  // This method receives a new notification and adds it to the store
  @Post('notifications')
  createNotification(@Body() notification: Notification) {
    console.log('Notification received:', notification);
    this.notificationService.add(notification);
  }

  // This method returns all notifications for a given user
  @Get('notifications/:id')
  getNotificationsForUser(@Param('id') id: string): Notification[] {
    return this.notificationService.getNotificationsForUser(id);
  }

  // This method returns a stream of notifications for a given user
  @Sse('notifications/:id/stream')
  notifications(@Param('id') id: string): Observable<MessageEvent> {
    // Return an observable that emits notifications for the given user
    return fromEvent(this.eventEmitter, EVENT_USER_NOTIFICATION).pipe(
      // Filter notifications by user ID
      filter((payload: Notification) => payload.userId === id),
      // Map the payload to a MessageEvent
      map(
        (payload) =>
          // Create a new MessageEvent with the notification payload
          new MessageEvent('message', {
            data: JSON.stringify(payload),
          } as MessageEventInit),
      ),
    );
  }
}

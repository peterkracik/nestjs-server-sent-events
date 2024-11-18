import { Injectable } from '@nestjs/common';
import { EVENT_USER_NOTIFICATION } from './constants';
import { EventEmitter2 } from '@nestjs/event-emitter';

export interface Notification {
  id: string;
  message: string;
  userId: string;
}

@Injectable()
export class NotificationsService {

  // This is a simple in-memory store for notifications
  private readonly notifications: Notification[] = [];

  constructor(private eventEmitter: EventEmitter2) { }

  // This method adds a new notification to the store and emits an event
  add(notification: Notification) {
    // Add the notification to the in-memory store
    this.notifications.push(notification);

    // Emit an event to notify the client
    this.eventEmitter.emit(EVENT_USER_NOTIFICATION, notification);
  }

  // This method returns all notifications for a given user
  getNotificationsForUser(id: string): Notification[] {
    // Filter the notifications by the user ID
    return this.notifications.filter(
      (notification) => notification.userId === id,
    );
  }
}

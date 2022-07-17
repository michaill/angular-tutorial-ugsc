import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Notification, NotificationType } from './notification.interface';

@Injectable({ providedIn: 'root' })
export class NotificationService {

  private notifications = new Subject<Notification>();
  get notifications$(): Observable<Notification> {
    return this.notifications.asObservable();
  }

  constructor() {
    console.log("NotificationService instantiated")
  }

  showNotification(type: NotificationType, text: string, ttl?: number) {
    if (!ttl) ttl = 10;
    this.notifications.next({
      type,
      ttl,
      text,
      created: new Date()
    });
  }
}

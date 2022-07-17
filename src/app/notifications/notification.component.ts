import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, map, merge, Subscription } from 'rxjs';
import { Notification } from './notification.interface';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnDestroy, OnInit {

  notifications: Notification[] = [];

  private sub: Subscription | undefined;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
      this.sub = merge(
        this.notificationService.notifications$,
        interval(1000).pipe(map(() => null))
      ).subscribe(
        (newNotification) => {
          const now = new Date().getTime();
          this.notifications = this.notifications.filter(
            (n) => !n.ttl || n.created.getTime() >= now - n.ttl*1000
          );
          if (newNotification) {
            this.notifications.push(newNotification);
          }
        }
      );
  }

  ngOnDestroy(): void {
      this.sub?.unsubscribe();
  }

  remove(index: number) {
    console.log("index", index);
    this.notifications.splice(index, 1);
  }
}

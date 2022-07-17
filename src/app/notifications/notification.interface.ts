export enum NotificationType {
    INFO = 'info',
    WARNING = 'warning',
    ERROR = 'error'
}

export interface Notification {
    ttl?: number;
    type: NotificationType;
    text: string;
    created: Date;
}
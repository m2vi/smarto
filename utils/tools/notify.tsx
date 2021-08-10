import { NotificationManager } from 'react-notifications';

export enum NotifyTypes {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

export const notify = (type: NotifyTypes, message: string) => {
  switch (type) {
    case NotifyTypes.info:
      NotificationManager.info(message);
      break;
    case NotifyTypes.success:
      NotificationManager.success(message, 'Title here');
      break;
    case NotifyTypes.warning:
      NotificationManager.warning(message, 'Close after 3000ms');
      break;
    case NotifyTypes.error:
      NotificationManager.error(message, 'Click me!', 5000);
      break;
  }
};

export default notify;

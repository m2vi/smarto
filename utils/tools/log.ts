import { isDevelopment, isTesting } from '../env/constants';

const log = (query: any, type?: string, when?: boolean) => {
  when = !when ? isDevelopment || isTesting : when;
  type = !type ? 'log' : type;

  if (when) {
    switch (type) {
      case 'log':
        console.log(query);
        break;
      case 'warn':
        console.warn(query);
        break;
      case 'info':
        console.info(query);
        break;
      case 'error':
        console.error(query);
        break;
      case 'debug':
        console.debug(query);
        break;
      default:
        console.log(query);
        break;
    }
  }

  return '';
};

export default log;

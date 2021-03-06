import copy from 'copy-to-clipboard';
import { isDevelopment, isTesting } from '@utils/env/constants';

const copyToClipboard = (message: any) => {
  copy(message, {
    debug: isDevelopment || isTesting,
  });
};

export default copyToClipboard;

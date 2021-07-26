import log from '../log';

const reverse = (str: string) => {
  if (typeof str !== 'string') return log('Param must be a string!');

  let newStr: string;

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
};

export default reverse;

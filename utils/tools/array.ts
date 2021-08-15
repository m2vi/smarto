export const sortByKey = (array: Array<any>, key: string) => {
  return array.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0));
};

export const removeDuplicates = (array: Array<any>) => {
  return array.filter((v, i) => array.indexOf(v) == i);
};

export const searchArray = (array: any[], key: string, value: string) => {
  if (array) {
    return array.filter(item => item[key] === value);
  } else {
    return [];
  }
};

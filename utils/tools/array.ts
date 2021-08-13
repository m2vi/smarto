export const sortByKey = (array: Array<any>, key: string) => {
  return array.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0));
};

export const removeDuplicates = (array: Array<any>) => {
  return array.filter((v, i) => array.indexOf(v) == i);
};

import Filter from 'bad-words';

const filter = new Filter();

const filterWords = (str: string) => {
  return filter.clean(str);
};

export default filterWords;

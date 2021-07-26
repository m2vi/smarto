const range = (value: string, minimum: string, maximum: string) => {
  for (let i = 0; i < value.length; i++) {
    if (value[i] < minimum[i]) {
      return false;
    }
    if (!(value[i] <= maximum[i])) {
      return false;
    }
  }
  return true;
};

export default range;

const sort = (query: string, divider: string) => {
  query = query.replace(" ", "");
  const array = query.split(divider || ",");
  const sorted = array.sort((a, b) => {
    return a.length - b.length;
  });

  return sorted;
};

export default sort;

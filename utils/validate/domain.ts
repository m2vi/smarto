const domain = (domain: string) => {
  const regex = /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/;

  return regex.test(domain);
};

export default domain;

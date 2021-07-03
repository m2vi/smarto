const codeBlock = (block: string) => {
  const regex = /`([^`]*)`/g;

  return regex.test(block);
};

export default codeBlock;

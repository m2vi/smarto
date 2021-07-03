export interface truncateOptionsProps {
  cutAt: number;
  replaceWidth?: string;
  specialsAtEnd?: boolean;
}

export const truncate = (
  input: string,
  { cutAt, specialsAtEnd, replaceWidth }: truncateOptionsProps
) => {
  if (input.length < cutAt) return input;

  replaceWidth = replaceWidth ? replaceWidth : '...';

  input = input.slice(0, cutAt);

  const cutSepcials = (input: string) => {
    if (specialsAtEnd) return input;
    const specials = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';

    let Input = input;
    for (let letter = Input.length - 1; letter <= 0; letter--) {
      const doesInclude = specials.includes(Input[letter]);
      if (!doesInclude) break;

      Input = Input.slice(0, letter);
    }

    return (Input += replaceWidth);
  };
  return cutSepcials(input);
};

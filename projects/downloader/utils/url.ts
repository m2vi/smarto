export interface AppendParamProps {
  param: string;
  value: string;
}

export const urlAppend = (url: URL, Array: Array<AppendParamProps>) => {
  Array.forEach((e) => {
    url.searchParams.append(e.param, e.value);
  });

  return url.toString();
};

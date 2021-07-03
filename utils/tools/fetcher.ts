const fetcher = async (url: string) => {
  const req = await fetch(url);
  const json = await req.json();

  return json;
};

export default fetcher;

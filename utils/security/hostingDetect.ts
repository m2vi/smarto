export default async (ip: string) => {
  try {
    const req = await fetch(`http://ip-api.com/json/${ip}?fields=16834560`);
    const json = await req.json();

    return await json.hosting;
  } catch (e) {
    return null;
  }
};

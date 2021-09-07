import console from '@utils/tools/console';

class Util {
  public async search(type: string, sort: string, start: number, max: number, query: string) {
    const data = await (await fetch(`/api/filmlist/items?type=${type}&key=${sort}&start=${start}&offset=50&query=${query}`)).json();
    console.search(query, { info: `max: ${max}, current: ${start}`, data });
    return data;
  }

  public async load(locale: string, type: string, sort: string, start: number, max: number, query?: string) {
    const data = await (
      await fetch(`/api/filmlist/items?locale=${locale}&type=${type}&key=${sort}&start=${start}&offset=50${query && `&query=${query}`}`)
    ).json();
    console.load(`max: ${max}, current: ${start}`, data);
    return data;
  }

  public async reload() {
    const data = await (await fetch(`/api/cache/clear`)).json();
    return data;
  }
}

export const util = new Util();

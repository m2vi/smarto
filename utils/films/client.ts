import console from '@utils/tools/console';

class Util {
  public async search(type: string, sort: string, start: number, max: number, query: string) {
    const data = await (await fetch(`/api/filmlist/items?type=${type}&key=${sort}&start=${start}&offset=50&query=${query}`)).json();
    console.search(query, { info: `max: ${max}, current: ${start}`, data });
    return data;
  }

  public async load(type: string, sort: string, start: number, max: number) {
    const data = await (await fetch(`/api/filmlist/items?type=${type}&key=${sort}&start=${start}&offset=50`)).json();
    console.load(`max: ${max}, current: ${start}`, data);
    return data;
  }
}

export const util = new Util();

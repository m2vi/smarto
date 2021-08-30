export class Console {
  constructor() {}

  fetch(data: any, service: string) {
    console.log('%c[FETCH]', 'color: #07821d', { data: data, service });
  }

  translation(details: any, name: string) {
    console.log('%c[TRANSLATION]', 'color: #0362fc', { data: details, name });
  }

  search(query: string, result: any) {
    console.log('%c[SEARCH]', 'color: #f0b000', query, { result });
  }

  load(info: string, result: any) {
    console.log('%c[LOAD]', 'color: #f0b000', info, { result });
  }
}

export default new Console();

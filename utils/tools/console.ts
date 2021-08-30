export class Console {
  constructor() {}

  fetch(data: any, service: string) {
    console.log('%c[FETCH]', 'color: #07821d', { data: data, service });
  }

  translation(name: string) {
    console.log('%c[TRANSLATION]', 'color: #0362fc', 'Initialized:', name);
  }

  search(query: string, result: any) {
    console.log('%c[SEARCH]', 'color: #f0b000', query, { result });
  }

  load(info: string, result: any) {
    console.log('%c[LOAD]', 'color: #f0b000', info, { result });
  }

  error(error: any) {
    console.log('&c[ERROR]', 'color: red', error?.message, { error });
  }
}

export default new Console();

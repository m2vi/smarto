export class Console {
  constructor() {}

  fetch(data: any, service: string, ...props: any) {
    console.log('%c[FETCH]', 'color: #07821d', { data: data, service }, ...props);
  }

  translation(name: string, ...props: any) {
    console.log('%c[TRANSLATION]', 'color: #0362fc', 'Initialized:', name, ...props);
  }

  search(query: string, result: any, ...props: any) {
    console.log('%c[SEARCH]', 'color: #f0b000', query, { result }, ...props);
  }

  load(info: string, result: any, ...props: any) {
    console.log('%c[LOAD]', 'color: #fce303', info, { result }, ...props);
  }

  error(message: string, error: any, ...props: any) {
    console.log('&c[ERROR]', 'color: #f54242', message, { error }, ...props);
  }

  good(message: string, ...props: any) {
    console.log('&c[GOOD]', 'color: #75f542', ...props);
  }

  log(message: string, ...props: any) {
    console.log('%c[LOG]', 'color: #8c7086', message, ...props);
  }
}

export default new Console();

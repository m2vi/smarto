export class Console {
  constructor() {}

  fetch(data: any, service: string) {
    console.log('%c[FETCH]', 'color: #07821d', { data: data, service });
  }

  translation(details: any, name: string) {
    console.log('%c[TRANSLATION]', 'color: #0362fc', { data: details, name });
  }
}

export default new Console();

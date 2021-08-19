export class Console {
  constructor() {}

  fetch(data: any, service: string) {
    console.log('%c[FETCH]', 'color: #07821d', { data: data, service });
  }
}

export default new Console();

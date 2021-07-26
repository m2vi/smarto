export class SessionManager {
  constructor() {}

  private cb(func: Function, ...params: any): void {
    if (typeof func === 'function' && func) {
      func(...params);
    }
  }

  public get(key: string, cb?: Function): any {
    const item = JSON.parse(sessionStorage.getItem(key));
    this.cb(cb, item ? true : false, item);
    return cb;
  }

  public store(key: string, dataz: any): void {
    sessionStorage.setItem(key, JSON.stringify(dataz));
  }

  public remove(key: string): void {
    sessionStorage.removeItem(key);
  }

  public clear(): void {
    sessionStorage.clear();
  }
}

export default new SessionManager();

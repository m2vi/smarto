export class SessionManager {
  constructor() {}

  cb(func: Function, ...params: any) {
    if (typeof func === "function" && func) {
      func(...params);
    }
  }

  get(key: string, cb?: Function) {
    const item = JSON.parse(sessionStorage.getItem(key));
    this.cb(cb, item ? true : false, item);
    return cb;
  }

  store(key: string, dataz: any) {
    sessionStorage.setItem(key, JSON.stringify(dataz));
  }

  remove(key: string) {
    sessionStorage.removeItem(key);
  }

  clear() {
    sessionStorage.clear();
  }
}

export default new SessionManager();

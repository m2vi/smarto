export class StorageManager {
  constructor() {}

  private cb(func: Function, ...params: any): void {
    if (typeof func === 'function' && func) {
      func(...params);
    }
  }

  public get(key: string, cb?: Function): any {
    const item = JSON.parse(localStorage.getItem(key));
    this.cb(cb, item ? true : false, item);
    return item;
  }

  public store(key: string, dataz: any): void {
    localStorage.setItem(key, JSON.stringify(dataz));
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }
}

export default new StorageManager();

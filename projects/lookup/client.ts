import { isDevelopment } from '@utils/env/constants';

export class Client {
  #baseUrl: string;
  constructor(private service: string) {
    this.#baseUrl = '/api/lookup';
  }

  private async fetcher(id: string) {
    if (isDevelopment) {
      return {
        success: false,
        message: 'Failed',
      };
    } else {
      try {
        const data = await fetch(`${this.#baseUrl}?service=${this.service}&id=${id}`);
        const json = await data.json();
        return json;
      } catch (error) {
        return {
          success: false,
          message: 'Failed',
        };
      }
    }
  }

  public async get(id: string) {
    return this.fetcher(id);
  }
}

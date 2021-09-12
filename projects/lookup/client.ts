import { baseUrl } from '@utils/tools/utils';

export class Client {
  #baseUrl: string;
  constructor(private service: string, private req?: any) {
    this.#baseUrl = '/api/lookup';
  }

  private async fetcher(id: string) {
    try {
      const data = await fetch(`${this.req ? baseUrl(this.req) : ''}${this.#baseUrl}?service=${this.service}&id=${id}`);
      const json = await data.json();
      return json;
    } catch (error) {
      return {
        success: false,
        message: 'Failed',
      };
    }
  }

  public async get(id: string) {
    return this.fetcher(id);
  }
}

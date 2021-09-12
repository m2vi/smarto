import { basicFetch } from '@utils/db/fetch';
import { baseUrl } from '@utils/tools/utils';

export class Client {
  #baseUrl: string;
  constructor(private service: string, private req?: any) {
    this.#baseUrl = '/api/lookup';
  }

  private async fetcher(id: string) {
    try {
      const data = await basicFetch(`${this.req ? baseUrl(this.req) : ''}${this.#baseUrl}?service=${this.service}&id=${id}`);
      return data;
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

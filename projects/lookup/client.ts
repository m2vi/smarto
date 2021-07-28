export class Client {
  #baseUrl: string;
  constructor(private service: string) {
    this.#baseUrl = 'http://lookup.vercel.app/api';
  }

  private async fetcher(id: string) {
    try {
      const data = await fetch(`${this.#baseUrl}/${this.service}/${id}`);
      const json = await data.json();
      return json;
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  public async get(id: string) {
    return this.fetcher(id);
  }
}

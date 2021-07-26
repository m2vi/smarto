interface getAllProps {
  query: string;
  repos: Promise<any>;
  details: Promise<any>;
}

export class GitHub {
  #baseUrl: string;

  constructor(private user: string) {
    this.#baseUrl = "https://api.github.com";
  }

  async fetcher(path: string) {
    const headers = {
      Authorization: `Authorization: token ${process.env.GitHubPAT}`,
    };

    const req = await fetch(new URL(path, this.#baseUrl).href, { headers });
    const json = await req.json();

    return json;
  }

  getLanguages(repos: any[]) {}

  async repos() {
    return await this.fetcher(`/users/${this.user}/repos`);
  }

  async repo(repository: string) {
    return await this.fetcher(`/repos/${this.user}/${repository}`);
  }

  async details() {
    return await this.fetcher(`/users/${this.user}`);
  }

  async lookup(): Promise<getAllProps> {
    return {
      query: this.user,
      repos: await this.repos(),
      details: await this.details(),
    };
  }
}

export default GitHub;

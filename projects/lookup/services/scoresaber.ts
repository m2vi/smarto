import { Player } from "scoresaber-api-client";

export class ScoreSaber {
  baseUrl: string;
  constructor(private id: string) {
    this.baseUrl = "https://new.scoresaber.com/api";
  }

  async lookup(): Promise<Player> {
    return await (await fetch(`${this.baseUrl}/player/${this.id}/full`)).json();
  }
}

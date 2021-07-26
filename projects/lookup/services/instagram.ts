import userInstagram from "user-instagram";

export class Instagram {
  constructor(private u: string) {}

  async lookup() {
    return await userInstagram.getUserData(this.u);
  }
}

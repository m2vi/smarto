export enum supportedAccounts {
  discord = "discord",
  github = "github",
  instagram = "instagram",
  ip = "ip",
  reddit = "reddit",
  scoresaber = "scoresaber",
  steam = "steam",
  youtube = "youtube",
}

export type accountProps = {
  [key in supportedAccounts]:
    | {
        useAsApiDefault: boolean;
        id: string;
      }
    | boolean;
};

export interface userData {
  firstname: string;
  lastname: string;
  birthday: number;
  createdAt: number;
  accounts: accountProps;
}

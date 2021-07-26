export interface connection {
  isConnnect: number;
}

export interface userProps {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  createdAt: number;
  avatar: {
    url: string;
  };
  ssh: {
    host: string;
    port: number;
    username: string;
    privateKey: string;
  };
  account: accountProps;
  apps: string[];
}

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

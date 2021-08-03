export enum supportedAccounts {
  discord = 'discord',
  github = 'github',
  instagram = 'instagram',
  ip = 'ip',
  reddit = 'reddit',
  scoresaber = 'scoresaber',
  steam = 'steam',
  youtube = 'youtube',
}

export type accountProps = {
  [key in supportedAccounts]?: string | boolean;
};

export interface userData {
  nickname: string;
  firstname: string;
  lastname: string;
  birthday: number;
  createdAt: number;
  accounts: accountProps;
}

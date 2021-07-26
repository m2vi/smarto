import CryptoJS from "crypto-js";

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

export class UserPassword {
  verify(HASH: string, input: string) {
    const plain = CryptoJS.AES.decrypt(HASH, process.env.privateKey).toString(CryptoJS.enc.Utf8);

    return plain === input;
  }
  generate(plain: string) {
    const SHA256 = CryptoJS.SHA256(plain);

    return SHA256;
  }
}

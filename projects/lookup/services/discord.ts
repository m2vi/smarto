import moment from "moment";

export interface discordResProps {
  // success
  id?: string;
  username?: string;
  avatar?: string;
  discriminator?: string;
  public_flags?: number;
  bot?: boolean;

  // fail
  message?: string;
  code?: number;
}

export interface formatedProps {
  success: boolean;
  message?: string;
  code?: number;
  bot?: boolean;
  id?: string;
  username?: string;
  name?: string;
  discriminator?: string;
  flags?: number;
  creationDate?: any;
  avatar?: {
    url: string;
    key: string;
  };
}

export class Discord {
  constructor(private id: string) {}

  reformat(props: discordResProps): formatedProps {
    const { message, code } = props;

    const success = message && code ? false : true;

    if (!success) {
      return {
        success,
        message,
        code,
      };
    }

    const { id, username, avatar, discriminator, public_flags, bot } = props;

    return {
      success: success,
      message: "200: Ok",
      code: 200,
      bot: bot ? true : false,
      id: id,
      username: username,
      name: `${username}#${discriminator}`,
      discriminator: discriminator,
      creationDate: this.convertIdtoTimestamp(),
      flags: public_flags,
      avatar: {
        url: `https://cdn.discordapp.com/avatars/${id}/${avatar}.png?size=1024`,
        key: avatar,
      },
    };
  }

  async lookup() {
    const baseUrl = "https://discord.com/api";
    const { discordToken } = process.env;

    const headers = {
      Authorization: `Bot ${discordToken}`,
    };

    const req = await fetch(`${baseUrl}/users/${this.id}`, {
      method: "GET",
      headers: headers,
    });

    const json: discordResProps = await req.json();

    return this.reformat(json);
  }

  convertIdtoTimestamp() {
    const bin = (+this.id).toString(2);
    const m = 64 - bin.length;
    const unixbin = bin.substring(0, 42 - m).toString();
    const timestamp = parseInt(unixbin, 2) + 1420070400000;
    return {
      time: timestamp.toString(),
      formated: {
        date: moment(timestamp).format("M.D.YYYY"),
        time: moment(timestamp).format("h:mm:ss A"),
      },
    };
  }
}

export default Discord;

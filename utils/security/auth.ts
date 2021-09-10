import { basicFetch } from '@utils/db/fetch';
import { baseUrl } from '@utils/tools/utils';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { NextApiRequest } from 'next';

interface AuthOptions {
  strict?: boolean;
}

export class Auth {
  public async pageAuth(req: NextApiRequest) {
    const token = await this.getToken(req);
    const cipher = await this.getTokenFromRequest(req);
    if (!token) return false;

    return cipher;
  }

  private getCookie(name, value) {
    value = `; ${value}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  private getTokenFromRequest(req: NextApiRequest) {
    return this.getCookie('jwt', req.headers.cookie);
  }

  public async getToken(req?: NextApiRequest, options: AuthOptions = { strict: true }) {
    if (req) {
      const cipher = this.getTokenFromRequest(req);

      if (options.strict) {
        const verified = await this.verify(cipher, req);
        if (!verified) return false;
      }

      return jwt.decode(cipher).toString();
    }

    const cipher = Cookies.get('jwt');

    if (options.strict) {
      const verified = await this.verify(cipher);
      if (!verified) return false;
    }

    return jwt.decode(cipher).toString();
  }

  public async createCookie(jsonwebtoken: string, req?: NextApiRequest) {
    Cookies.set('jwt', jsonwebtoken, { expires: 7, path: '/' });

    return Cookies.get('jwt');
  }

  public async verify(cipher: string, req?: NextApiRequest) {
    const data = await basicFetch(`${req ? baseUrl(req) : ''}/api/auth/verify`, { headers: new Headers({ token: cipher }) });

    return data.verified ? true : false;
  }

  public async hasAccess(req?: NextApiRequest) {
    const token = await this.getToken(req);

    return {
      access: token ? true : false,
      token,
    };
  }
}

export default new Auth();

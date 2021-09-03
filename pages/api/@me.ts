import { NextApiRequest, NextApiResponse } from 'next';

import { AES } from '@utils/security/aes';
import user from '@config/me';

export const me = async (_: NextApiRequest, res: NextApiResponse) => {
  const aes = new AES();

  const u = aes.encrypt(JSON.stringify(user));
  const plain = aes.decrypt(u);
  res.status(200).json(plain);
};

export default me;

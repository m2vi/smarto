import { NextApiRequest, NextApiResponse } from 'next';

import { AES } from '@utils/security/aes';
import { restricted } from '@utils/db/protection';

export const encrypt = async (_: NextApiRequest, res: NextApiResponse) => {
  const { access } = await restricted(_, res);
  if (!access) return;
  const aes = new AES();

  try {
    const plain = _.query.q;

    const ciphertext = aes.encrypt(plain.toString());
    res.status(200).json({
      success: true,
      data: ciphertext,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default encrypt;

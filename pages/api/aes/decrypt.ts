import { NextApiRequest, NextApiResponse } from 'next';

import { AES } from '@utils/security/aes';
import { restricted } from '@utils/db/protection';

export const decrypt = async (_: NextApiRequest, res: NextApiResponse) => {
  const { access } = await restricted(_, res);
  if (!access) return;
  const aes = new AES();

  try {
    const ciphertext = _.query.q;

    const plain = aes.decrypt(ciphertext.toString());
    res.status(200).json({
      success: true,
      data: plain,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default decrypt;

// FIX MISSING +

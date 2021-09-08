import { NextApiRequest, NextApiResponse } from 'next';

import { AES } from '@utils/security/aes';

export const decrypt = async (_: NextApiRequest, res: NextApiResponse) => {
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

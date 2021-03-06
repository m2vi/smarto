import { basicFetch } from '@utils/db/fetch';
import { baseUrl } from '@utils/tools/utils';
import { NextApiRequest, NextApiResponse } from 'next';

const splitgate = async (_: NextApiRequest, res: NextApiResponse) => {
  const me = await basicFetch(`${baseUrl(_)}/api/@me?token=${process.env.API_TOKEN}`);

  const account = 'steam';
  const steamid = me?.accounts[account];

  const stats = await basicFetch(`https://public-api.tracker.gg/v2/splitgate/standard/profile/${account}/${steamid}`, {
    headers: new Headers({ 'TRN-Api-Key': process.env.TRACKER_TOKEN }),
  });

  res.status(200).json(stats);
};

export default splitgate;

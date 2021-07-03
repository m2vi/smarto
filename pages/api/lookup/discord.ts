import { NextApiRequest, NextApiResponse } from "next";
import { Discord } from "../../../projects/lookup/services/discord";

export const discord = async (_: NextApiRequest, res: NextApiResponse) => {
  const { u } = _.query;

  const user = new Discord(u ? u.toString() : "0");

  const req = await user.lookup();

  res.status(200).json(req);
};

export default discord;

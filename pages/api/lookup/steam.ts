import { NextApiRequest, NextApiResponse } from "next";
import { Steam } from "../../../projects/lookup/services/steam";

export const steam = async (_: NextApiRequest, res: NextApiResponse) => {
  const { u } = _.query;

  if (!u || typeof u !== "string") res.status(400).json({ code: 403, message: "Bad request!" });

  const user = await new Steam(u.toString()).lookup();

  res.status(200).json(user);
};

export default steam;

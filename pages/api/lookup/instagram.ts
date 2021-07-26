import { NextApiRequest, NextApiResponse } from "next";
import { Instagram } from "../../../projects/lookup/services/instagram";

export const instagram = async (_: NextApiRequest, res: NextApiResponse) => {
  const { u } = _.query;

  if (!u || typeof u !== "string") res.status(400).json({ code: 403, message: "Bad request!" });

  const user = await new Instagram(u.toString()).lookup();

  res.status(200).json(user);
};

export default instagram;

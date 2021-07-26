import { NextApiRequest, NextApiResponse } from "next";
import { YouTube } from "../../../projects/lookup/services/youtube";

export const youtube = async (_: NextApiRequest, res: NextApiResponse) => {
  const { u } = _.query;

  if (!u || typeof u !== "string") res.status(400).json({ code: 403, message: "Bad request!" });

  const user = await new YouTube(u.toString()).lookup();

  res.status(200).json(user);
};

export default youtube;

import { NextApiRequest, NextApiResponse } from "next";
import { GitHub } from "../../../projects/lookup/services/github";

export const github = async (_: NextApiRequest, res: NextApiResponse) => {
  const { u } = _.query;

  if (!u || typeof u !== "string") res.status(400).json({ code: 403, message: "Bad request!" });

  const user = await new GitHub(u.toString()).lookup();

  res.status(200).json(user);
};

export default github;

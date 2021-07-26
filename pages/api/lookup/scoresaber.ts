import { NextApiRequest, NextApiResponse } from "next";
import { ScoreSaber } from "../../../projects/lookup/services/scoresaber";

const scoresaber = async (_: NextApiRequest, res: NextApiResponse) => {
  const { u } = _.query;

  if (!u || typeof u !== "string") res.status(400).json({ code: 403, message: "Bad request!" });

  const user = await new ScoreSaber(u.toString()).lookup();

  res.status(200).json(user);
};

export default scoresaber;

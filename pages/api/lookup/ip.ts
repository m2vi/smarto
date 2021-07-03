import { NextApiRequest, NextApiResponse } from "next";
import { Ip } from "../../../projects/lookup/services/ip";
import validateIP from "../../../utils/validate/ip";

export const ip = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    let { ip } = _.query || _.body;

    if (typeof ip === "undefined") {
      ip = _.headers["x-real-ip"].toString();
    } else if (!validateIP(ip)) {
      return res.status(401).json({ success: false, message: "Given IP sucks!" });
    }

    const info = await new Ip(ip).lookup();

    res.status(200).json(info);
  } catch (e) {
    res.status(401).json({ success: false, message: "Bad request!" });
  }
};

export default ip;

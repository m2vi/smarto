import { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";
import contentDisposition from "content-disposition";

export const download = async (req: NextApiRequest, res: NextApiResponse) => {
  const { v } = req.query;
  const V = v ? v.toString() : "";

  let { url, vname, itag, format } = req.query;

  res.status(200).json({});

  // res.writeHead(200, {
  //   'Content-Disposition': `${contentDisposition(`${vname}.${format}`)}`,
  //   'Content-Transfer-Encoding': 'binary',
  //   'Content-Type': 'application/octet-stream',
  // });
  // console.log(req.query);
  // ytdl(url.toString(), {
  //   filter: (format) => format.itag === 37,
  // }).pipe(res.status(200));
};

export default download;

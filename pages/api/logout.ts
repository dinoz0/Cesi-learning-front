// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cookies from "cookies";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cookie = new Cookies(req, res);
  cookie.set("token", "deleted");
  return res.status(200).redirect("/login");
}

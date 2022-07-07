// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  if (email === "test" && password === "testpwd") {
    const cookies = new Cookies(req, res);
    cookies.set("token", "testvalue");
    return res.status(200).redirect("/");
  }
  return res.status(401).redirect("/login?error=true");
}

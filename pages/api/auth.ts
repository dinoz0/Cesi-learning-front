// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).redirect("/login?error=true");
  }
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const result = await fetch(process.env.API_URL + "/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers,
  });
  const json = await result.json();
  console.log(json);
  if (result.status === 200 && json.token) {
    const cookies = new Cookies(req, res);
    cookies.set("token", json.token);
    return res.status(200).redirect("/");
  }
  return res.status(401).redirect("/login?error=true");
}

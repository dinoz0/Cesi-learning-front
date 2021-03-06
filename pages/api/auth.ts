// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";
import { Roles } from "../../utils/roles";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).redirect("/login?error=true");
  }
  if (process.env.API_URL) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const result = await fetch(process.env.API_URL + "/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers,
    });
    const json = await result.json();
    if (result.status === 200 && json.token) {
      const cookies = new Cookies(req, res);
      cookies.set("token", json.token);
      if (json.data.role === Roles.Admin) {
        return res.status(200).redirect("/admin");
      }
      return res.status(200).redirect("/");
    }
  }
  if (email === "testemail" && password === "testpassword") {
    const cookies = new Cookies(req, res);
    cookies.set("token", "testToken");
    return res.status(200).redirect("/");
  }
  return res.status(401).redirect("/login?error=true");
}

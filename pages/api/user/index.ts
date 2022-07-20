// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { nom, prenom, email, role, password } = req.body;
    if (!nom || !prenom || !email || !role || !password) {
      return res.status(400).json({ message: "Formulaire incorrect" });
    }
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    if (!req.cookies.token) return res.status(401).redirect("/login");
    headers.append("authorization", "Bearer " + req.cookies.token);
    const result = await fetch(process.env.API_URL + `/user`, {
      method: "POST",
      body: JSON.stringify({ nom, prenom, email, role, password }),
      headers,
    });
    const json = await result.json();
    return res.status(result.status).json({ ...json });
  }
}
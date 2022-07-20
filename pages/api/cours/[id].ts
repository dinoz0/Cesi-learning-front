// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PATCH") {
    const { nom, prenom, email, role } = req.body;
    if (!nom || !prenom || !email || !role)
      return res.status(400).json({ message: "Formulaire incorrect" });
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    if (!req.cookies.token) return res.status(401).redirect("/login");
    headers.append("authorization", "Bearer " + req.cookies.token);
    const result = await fetch(process.env.API_URL + `/user/${req.query.id}`, {
      method: "PATCH",
      body: JSON.stringify({ nom, prenom, email, role }),
      headers,
    });
    const json = await result.json();
    return res.status(res.statusCode).json({ ...json });
  }
  if (req.method === "DELETE") {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    if (!req.cookies.token) return res.status(401).redirect("/login");
    headers.append("authorization", "Bearer " + req.cookies.token);
    const result = await fetch(process.env.API_URL + `/user/${req.query.id}`, {
      method: "DELETE",
      headers,
    });
    const json = await result.json();
    return res.status(result.status).json({ ...json });
  }
  if (req.method === "POST") {
    const { nom, prenom, email, role, password } = req.body;
    if (!nom || !prenom || !email || !role || !password)
      return res.status(400).json({ message: "Formulaire incorrect" });
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    if (!req.cookies.token) return res.status(401).redirect("/login");
    headers.append("authorization", "Bearer " + req.cookies.token);
    const result = await fetch(process.env.API_URL + `/user/${req.query.id}`, {
      method: "POST",
      body: JSON.stringify({ nom, prenom, email, role }),
      headers,
    });
    const json = await result.json();
    return res.status(res.statusCode).json({ ...json });
  }
}
